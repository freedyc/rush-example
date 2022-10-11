import fs from 'fs';
import { promisify } from 'util';

const files = await promisify(fs.readdir)('./packages/components/src');
console.log('files', files);
let entryContent = '';

files.forEach((it) => {
    entryContent += `export { default as ${it} } from './src/${it}'\n`
})

console.log(entryContent);

fs.writeFileSync('./packages/components/index.ts', entryContent);