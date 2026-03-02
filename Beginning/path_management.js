const p = require("path");
const myURL = p.join("./Parent", "Child1", "Child11", "file.dat");
console.log(`\n${myURL}\n`);

const base = p.basename(myURL);
console.log(`\nBasename: ${base}\n`);

const absolutePath = p.resolve(__dirname, "Child1", "Child11", "file.dat");
console.log(`\nAbsolute path: ${absolutePath}\n`);
