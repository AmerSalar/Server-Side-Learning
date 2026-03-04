const { readFile } = require("fs");

// readFile("./File-system/data.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// });

const readText = (path) => {
  return new Promise((res, rej) => {
    readFile(path, "utf-8", (err, result) => {
      if (err) {
        rej(err);
      } else {
        res(result);
      }
    });
  });
};

// This is .then .catch .finally way of handling promises
readText("./File-system/data.txt").then((value) => {
  console.log(value);
});

// This is async & await
const start = async () => {
  const txt = await readText("./File-system/data.txt");
  console.log(txt);
};
start();


