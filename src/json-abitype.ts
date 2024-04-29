import path from 'path';
import fs from 'fs/promises';

export async function processDirectory(dir: string): Promise<string> {
  let result = '';
  await fs.readdir(dir).then(async (files) => {
    for (const file of files) {
      try {
        result += await processFile(path.join(dir, file)) + '\n';
      } catch (err) {
        console.error(err.message);
      }
    }
  });
  return result;
}

export async function processFile(file: string): Promise<string> {
  if (path.extname(file) !== '.json') {
    throw new Error(`File ${file} is not a JSON file`);
  }
  const obj = JSON.parse(await fs.readFile(file, 'utf8'));
  const abi = 'abi' in obj ? obj.abi : obj;
  return `export const ${path.basename(file, '.json')} = ${objectToString(abi, '', true)} as const;`;
}

function objectToString(obj: object, indent: string, named: boolean): string {
  let result: string = '';
  // check if obj is an array
  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    }
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
      result += `'${obj}'`;
    } else {
      result += obj;
    }
  }
  return result;
}
