
import {promises} from 'fs';

const {readdir, readFile} = promises;

//(async function () {
// const files = await readdir('./')
// for (const file of files) {
//     console.log(file);
// }

const start = process.hrtime.bigint();
const num = await readFile('../sample.txt', {'encoding': 'utf8'});
if(parseFloat(num) > 7) {
    const content = await readFile('../sample2.txt', {'encoding': 'utf8'});
    console.log(content);
}
console.log(parseFloat(num));

const stop = process.hrtime.bigint();
console.log(stop - start);

