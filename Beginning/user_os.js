const os = require("os");
const printUserInfo = () => {
  const user = {
    uptime: os.uptime() / 60 + " minutes",
    name: os.type(),
    totalMemory: os.totalmem() / 1000000000 + " GB",
    freeMemory: os.freemem() / 1000000000 + " GB",
  };
  console.log(user);
};

module.exports = { printUserInfo };
