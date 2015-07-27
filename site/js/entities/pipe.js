var graphicsComponent = require('../components/graphics/pipe');
var physicsComponent = require('../components/physics/physics')

var Pipe = function() {
  console.log("Creating a pipe!");
  var physics = new physicsComponent.PhysicsComponent(this);
  physics.position.y = 0.1;
  physics.acceleration.y = -0.2; // Change to 2

  var graphics = new graphicsComponent.PipeGraphicsComponent(this);
  this.components = {
    graphics: graphics,
    physics: physics
  };
};

exports.Pipe = Pipe;
