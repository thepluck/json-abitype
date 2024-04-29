#!/usr/bin/env node

import { program } from 'commander';
import fs from 'fs/promises';
import { processDirectory, processFile } from '../lib/json-abitype.js';

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

for (const dir of options.dirs) {
  await fs.stat(dir).then(async (stat) => {
    if (stat.isDirectory()) {
      result += await processDirectory(dir);
    } else {
      result += await processFile(dir) + '\n';
    }
  }).catch((err) => {
    console.error(err);
  });
}

if (options.out) {
  await fs.writeFile(options.out, result);
} else {
  console.log(result);
}
