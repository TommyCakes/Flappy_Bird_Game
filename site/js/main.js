var flappyBird = require('./flappy_bird');

document.addEventListener('DOMContentLoaded', function () {
  var app = new flappyBird.FlappyBird();
  app.run();
});

// function startup() {
//   var el = document.getElementsById("main-canvas")[0];
//   el.addEventListener("touchstart", handleStart, false);
//   el.addEventListener("touchend", handleEnd, false);
//   el.addEventListener("touchcancel", handleCancel, false);
//   el.addEventListener("touchleave", handleEnd, false);
//   el.addEventListener("touchmove", handleMove, false);
//   log("initialized.");
// }
