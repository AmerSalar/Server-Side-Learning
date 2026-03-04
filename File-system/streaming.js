const { createReadStream, writeFileSync } = require("fs");
const str = createReadStream("./File-system/bigData.txt", "utf-8");

// for (let i = 0; i < 1000; i++)
//   writeFileSync("./File-system/bigData.txt", `Hello world of ${i}\n`, {
//     flag: "a",
//   });

str.on("data", (result) => {
  console.log(result);
});
