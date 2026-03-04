const util = require("util");
const { readFile, writeFile } = require("fs");
// If we wanted them to return promises, we can also:
// const { readFile, writeFile } = require("fs").promises;

const readFileProm = util.promisify(readFile);
const writeFileProm = util.promisify(writeFile);

const start = async () => {
  await writeFileProm("./File-system/text.txt", "Hello Everyone");
  const text = await readFileProm("./File-system/text.txt", "utf-8");
  console.log(text);
};
start();
