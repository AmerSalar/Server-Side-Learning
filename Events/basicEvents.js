const Emitter = require("events");
const myEmitter = new Emitter();

myEmitter.on("start", () => {
  console.log("Event started..");
});

myEmitter.emit("start");
