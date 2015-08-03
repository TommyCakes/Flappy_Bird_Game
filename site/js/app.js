(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var CircleCollisionComponent = function(entity, radius) {
    this.entity = entity;
    this.radius = radius;
    this.type = 'circle';
};

CircleCollisionComponent.prototype.collidesWith = function(entity) {
    if (entity.components.collision.type == 'circle') {
        return this.collideCircle(entity);
    }
    else if (entity.components.collision.type == 'rect') {
        return this.collideRect(entity);
    }
    return false;
};

CircleCollisionComponent.prototype.collideCircle = function(entity) {
    var positionA = this.entity.components.physics.position;
    var positionB = entity.components.physics.position;

    var radiusA = this.radius;
    var radiusB = entity.components.collision.radius;

    var diff = {x: positionA.x - positionB.x,
                y: positionA.y - positionB.y};

    var distanceSquared = diff.x * diff.x + diff.y * diff.y;
    var radiusSum = radiusA + radiusB;

    return distanceSquared < radiusSum * radiusSum;
};

CircleCollisionComponent.prototype.collideRect = function(entity) {
    var clamp = function(value, low, high) {
        if (value < low) {
            return low;
        }
        if (value > high) {
          return high;
        }
        return value;
    };

    var positionA = this.entity.components.physics.position;
    var positionB = entity.components.physics.position;
    var sizeB = entity.components.collision.size;

    var closest = {
        x: clamp(positionA.x, positionB.x - sizeB.x / 2,
                 positionB.x + sizeB.x / 2),
        y: clamp(positionA.y, positionB.y - sizeB.y / 2,
                 positionB.y + sizeB.y / 2)
    };

    var radiusA = this.radius;
    var diff = {x: positionA.x - closest.x,
                y: positionA.y - closest.y};

    var distanceSquared = diff.x * diff.x + diff.y * diff.y;
    return distanceSquared < radiusA * radiusA;
};

exports.CircleCollisionComponent = CircleCollisionComponent;

},{}],2:[function(require,module,exports){
var BirdGraphicsComponent = function(entity) {
  this.entity = entity;
};

BirdGraphicsComponent.prototype.draw = function(context) {
    // console.log(this.entity.components.physics.position);
  var path = new Path2D();
  var position = this.entity.components.physics.position;

      context.save();
      context.translate(position.x, position.y);
      context.beginPath();
      context.arc(0, 0, 0.06, 0, 2 * Math.PI);
      context.fill();
      context.closePath();
      context.restore();

      // //Beak outline
      // context.beginPath();
      // context.fillStyle = "black";
      // path.moveTo(175, 50);
      // path.moveTo(175,52);
      // path.lineTo(92,75);
      // path.lineTo(90,15);
      // context.fill(path);
      // context.closePath();
      // //Beak
      // context.beginPath();
      // context.fillStyle = "orange";
      // path.moveTo(175, 50);
      // path.moveTo(175,52);
      // path.lineTo(90,75);
      // path.lineTo(90,15);
      // context.fill(path);
      // context.closePath();
      // //Shadow of head
      // context.beginPath();
      // context.fillStyle = "#bb0";
      // context.arc(95, 60, 54, 0, 2 * Math.PI);
      // context.fill();
      // context.closePath();
      // //Head
      // context.beginPath();
      // context.fillStyle = "#ff1";
      // context.arc(100, 60, 50, 0, 2 * Math.PI);
      // context.fill();
      // context.closePath();
      // //Body Shadow
      // context.beginPath();
      // context.fillStyle = "#bb0";
      // context.arc(95, 170, 62, 4, 12 * Math.PI);
      // context.fill();
      // context.closePath();
      // //Body
      // context.beginPath();
      // context.fillStyle = "#ff1";
      // context.arc(100, 170, 60, 4, 12 * Math.PI);
      // context.fill();
      // context.closePath();
      // //Eye
      // context.beginPath();
      // context.fillStyle = "white";
      // context.arc(100, 40, 12, 0, 2 * Math.PI);
      // context.fill();
      // context.closePath();
      // //Eyeball
      // context.beginPath();
      // context.fillStyle = "lightBlue";
      // context.arc(100, 44, 7, 8, 2 * Math.PI);
      // context.fill();
      // context.closePath();
      //
      // context.beginPath();
      // context.fillStyle = "grey";
      // context.translate(210, 60);
      // context.arc(00, 90, 40, 61, 2 * Math.PI);
      // context.fill();
      // context.closePath();
      //
      //
      // context.beginPath();
      // path.moveTo(175, 50);
      // path.moveTo(175,52);
      // path.lineTo(190,75);
      // path.lineTo(190,15);
      // context.closePath();

  // context.fillRect(255,255,0);


  console.log("Drawing a bird");
};

exports.BirdGraphicsComponent = BirdGraphicsComponent;

},{}],3:[function(require,module,exports){
var PipeGraphicsComponent = function(entity){
  this.entity = entity;
};

PipeGraphicsComponent.prototype.draw = function(context) {
  // console.log(this.entity.components.physics.position);
  var path = new Path2D();
  var position = this.entity.components.physics.position;

  context.save();
  context.translate(position.y, position.x);
  context.translate(0.9 ,-0.1);
  context.beginPath();
  context.rect(0, 0, -0.2, 0.4 );
  context.fill();
  context.closePath();
  context.restore();
  // console.log(context);
  context.save();
  context.translate(position.y, position.x);
  context.translate(0.9 ,0.6);
  context.beginPath();
  context.rect(0, 0, -0.2, 0.4 );
  context.fill();
  context.closePath();
  context.restore();
};
exports.PipeGraphicsComponent = PipeGraphicsComponent;

},{}],4:[function(require,module,exports){
var PhysicsComponent = function (entity) {
  this.entity = entity;

  this.position = {
    x: 0,
    y: 0
  };
  this.velocity = {
    x:0,
    y:0
  };
  this.acceleration = {
    x: 0,
    y: 0
  };
};

PhysicsComponent.prototype.update = function(delta) {

  this.velocity.x += this.acceleration.x * delta;
  this.velocity.y += this.acceleration.y * delta;

  this.position.x += this.velocity.x * delta;
  this.position.y += this.velocity.y * delta;
};

exports.PhysicsComponent = PhysicsComponent;

},{}],5:[function(require,module,exports){
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

},{"../components/collision/circle":1,"../components/graphics/bird":2,"../components/physics/physics":4}],6:[function(require,module,exports){
var graphicsComponent = require('../components/graphics/pipe');
var physicsComponent = require('../components/physics/physics')

var Pipe = function() {
  // console.log("Creating a pipe!");
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

},{"../components/graphics/pipe":3,"../components/physics/physics":4}],7:[function(require,module,exports){
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

},{"./entities/birds.js":5,"./entities/pipe.js":6,"./system/graphics":10,"./system/input":11,"./system/physics":12,"./system/pipes":13}],8:[function(require,module,exports){
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

},{"./flappy_bird":7}],9:[function(require,module,exports){
var CollisionSystem = function(entities) {
    this.entities = entities;
};

CollisionSystem.prototype.tick = function() {
    for (var i=0; i<this.entities.length; i++) {
        var entityA = this.entities[i];
        if (!'collision' in entityA.components) {
            continue;
        }

        for (var j=i+1; j<this.entities.length; j++) {
            var entityB = this.entities[j];
            if (!'collision' in entityB.components) {
                continue;
            }

            if (!entityA.components.collision.collidesWith(entityB)) {
                continue;
            }

            if (entityA.components.collision.onCollision) {
                entityA.components.collision.onCollision(entityB);
            }

            if (entityB.components.collision.onCollision) {
                entityB.components.collision.onCollision(entityA);
            }
        }
    }
};

exports.CollisionSystem = CollisionSystem;

},{}],10:[function(require,module,exports){
var GraphicsSystem = function(entities) {
  this.entities = entities;
  //Canvas is where we drawt
  this.canvas = document.getElementById('main-canvas');
  //Context is what we draw to
  this.context = this.canvas.getContext('2d');
};


GraphicsSystem.prototype.run = function() {
  //Tick the graphics system a few to times to see in action!
  // Run render loop
  window.requestAnimationFrame(this.tick.bind(this));

  //   this.tick()
  // }
};

GraphicsSystem.prototype.tick = function() {
  //Set canvas to the correct size is resized
  if (this.canvas.width != this.canvas.offsetWidth ||
      this.canvas.height != this.canvas.offsetHeight) {
      this.canvas.width = this.canvas.offsetWidth;
      this.canvas.height = this.canvas.offsetHeight;
      }

      //Clear canvas
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.context.save();
      this.context.translate(this.canvas.width / 2, this.canvas.height);
      this.context.scale(this.canvas.height, -this.canvas.height);

      //Rendering here
  for(var i=0; i<this.entities.length; i++) {
    var entity = this.entities[i]
    // console.log(entity);
    if (!'graphics' in entity.components) {
      continue;
    }

    entity.components.graphics.draw(this.context);
}

this.context.restore();

  window.requestAnimationFrame(this.tick.bind(this));
// };
};

exports.GraphicsSystem = GraphicsSystem;

},{}],11:[function(require,module,exports){
var InputSystem = function(entities) {
  this.entities = entities;

  //Canvas is where we get the input from
  this.canvas = document.getElementById('main-canvas');
};

InputSystem.prototype.run = function () {
  this.canvas.addEventListener('click', this.onClick.bind(this));
};

InputSystem.prototype.onClick = function (){
  var bird = this.entities[0];
  bird.components.physics.velocity.y = 0.2 //0.7;
};

exports.InputSystem = InputSystem;

},{}],12:[function(require,module,exports){
var collisionSystem = require("./collision");

var PhysicsSystem = function(entities) {
  this.entities = entities;
  this.collisionSystem = new collisionSystem.CollisionSystem(entities);
};

PhysicsSystem.prototype.run = function(){
  //Run loop
  window.setInterval(this.tick.bind(this), 100 /60);
};

PhysicsSystem.prototype.tick = function () {

  for (var i=0; i < this.entities.length; i++) {
    var entity = this.entities[i];
    if ( !'physics' in entity.components) {
      continue;
    };

    entity.components.physics.update(1/60);
  }
  // this.collisionSystem.tick();
};

exports.PhysicsSystem = PhysicsSystem;

},{"./collision":9}],13:[function(require,module,exports){
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

},{"../entities/pipe":6}]},{},[8]);
