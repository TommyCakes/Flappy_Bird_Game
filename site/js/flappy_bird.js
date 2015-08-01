var graphicsSystem = require('./system/graphics');
var physicsSystem = require('./system/physics');
var inputSystem = require('./system/input');
var pipeSystem = require('./system/pipes');

var bird = require('./entities/birds.js');
var pipe = require('./entities/pipe.js');

var FlappyBird = function() {
  this.entities = [new bird.Bird(), new pipe.Pipe()]

  this.graphics = new graphicsSystem.GraphicsSystem(this.entities);
  this.physics = new physicsSystem.PhysicsSystem(this.entities);
  this.inputs = new inputSystem.InputSystem(this.entities);
  this.pipes = new pipeSystem.PipeSystem(this.entities);
};

FlappyBird.prototype.run = function() {
  this.graphics.run();
  this.physics.run();
  this.inputs.run();
  this.pipes.run();
};

exports.FlappyBird = FlappyBird;
