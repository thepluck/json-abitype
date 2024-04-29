import { program } from 'commander';
import path from 'path';
import fs from 'fs/promises';

program
  .name('json-abitype')
  .description('CLI for converting JSON to ABIType')
  .version('0.0.0');

program
  .requiredOption('-d, --dirs <string...>', 'files or directories to process')
  .option('-o, --out <string>', 'output file');

program.parse();

const options = program.opts();
let result = '';
let first = true;

for (const dir of options.dirs) {
  await fs.stat(dir).then(async (stat) => {
    if (stat.isDirectory()) {
      await processDirectory(dir);
    } else {
      await processFile(dir);
    }
  });
}

if (options.out) {
  await fs.writeFile(options.out, result);
} else {
  console.log(result);
}

async function processDirectory(dir: string): Promise<void> {
  await fs.readdir(dir).then(async (files) => {
    for (const file of files) {
      await processFile(path.join(dir, file));
    }
  });
}

async function processFile(file: string): Promise<void> {
  if (path.extname(file) !== '.json') {
    return;
  }
  const obj = JSON.parse(await fs.readFile(file, 'utf8'));
  const abi = 'abi' in obj ? obj.abi : obj;
  if (!first) {
    result += '\n';
  }
  result += `export const ${path.basename(file, '.json')} = ${objectToString(abi, '', true)} as const;`;
  first = false;
}

function objectToString(obj: object, indent: string, named: boolean): string {
  let result: string = '';
  // check if obj is an array
  if (Array.isArray(obj)) {
    let first = true;
    if (named) {
      result += '[\n';
    } else {
      result += `${indent}[\n`;
    }
    for (const item of obj) {
      if (!first) {
        result += ',\n';
      }
      result += objectToString(item, indent + '  ', false);
      first = false;
    }
    result += `\n${indent}]`;
  } else if (typeof obj === 'object') {
    let first = true;
    if (named) {
      result += '{\n';
    } else {
      result += `${indent}{\n`;
    }
    for (const key in obj) {
      if (key == 'internalType') continue;
      if (!first) {
        result += ',\n';
      }
      result += `${indent}  ${key}: ${objectToString(obj[key], indent + '  ', true)}`;
      first = false;
    }
    result += `\n${indent}}`;
  } else {
    if (typeof obj === 'string') {
      result += `"${obj}"`;
    } else {
      result += obj;
    }
  }
  return result;
}
