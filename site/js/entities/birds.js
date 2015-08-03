var graphicsComponent = require("../components/graphics/bird");
var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/circle");
// var settings = require("../settings");

var Bird = function () {
  var physics = new physicsComponent.PhysicsComponent(this);
  physics.position.y = 0.1;
  physics.acceleration.y = -0.2; // Change to 2
  console.log("Creating Bird entity");

  var graphics = new graphicsComponent.BirdGraphicsComponent(this);
  var collision = new collisionComponent.CircleCollisionComponent(this, 0.02);
  collision.onCollision = this.onCollision.bind(this);

  this.components = {
    physics: physics,
    graphics: graphics,
    collision: collision
  };
};

Bird.prototype.onCollision = function(entity) {
  console.log("Bird collided with entity:", entity);
};

exports.Bird = Bird;
