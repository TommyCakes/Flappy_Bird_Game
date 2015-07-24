var graphicsSystem = require('./system/graphics');
var bird = require('./entities/birds.js');

var FlappyBird = function() {
  this.entities = [new bird.Bird()];//
  this.graphics = new graphicsSystem.GraphicsSystem(this.entities);

};

FlappyBird.prototype.run = function() {
  this.graphics.run();
};

exports.FlappyBird = FlappyBird;
