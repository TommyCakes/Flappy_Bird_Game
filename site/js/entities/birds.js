var graphicsComponent = require("../components/graphics/bird");
var physicsComponent = require("../components/physics/physics");

var Bird = function () {
  var physics = new physicsComponent.PhysicsComponent(this);
  physics.position.y = 0.1;
  physics.acceleration.y = -0.2; // Change to 2
  console.log("Creating Bird entity");

  var graphics = new graphicsComponent.BirdGraphicsComponent(this);

  this.components = {
    physics: physics,
    graphics: graphics,
  };
};

exports.Bird = Bird;
