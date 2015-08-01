// var pipe = require('../entities/pipe');
//
// var PipeSystem = function(entities) {
//   this.entities = entities;
// };
//
// PipeSystem.prototype.run = function () {
//   // this.tick();
//
//   window.setInterval(this.tick.bind(this), 2000);
// };
//
// exports.PipeSystem = PipeSystem;


var pipe = require('../entities/pipe');

var PipeSystem = function(entities) {
  this.entities = entities;
};

PipeSystem.prototype.run = function() {
  this.tick();

  // Run the update loop
  window.setInterval(this.tick.bind(this), 2000);
};

PipeSystem.prototype.tick = function() {
  this.entities.push(new pipe.Pipe(0.1));
};

exports.PipeSystem = PipeSystem;
