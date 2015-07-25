(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var BirdGraphicsComponent = function(entity) {
  this.entity = entity;
};

BirdGraphicsComponent.prototype.draw = function(context) {
  var path = new Path2D();

      context.beginPath();
      context.fillStyle = "black";
      path.moveTo(175, 50);
      path.moveTo(175,52);
      path.lineTo(92,75);
      path.lineTo(90,15);
      context.fill(path);
      context.closePath();

      context.beginPath();
      context.fillStyle = "orange";
      path.moveTo(175, 50);
      path.moveTo(175,52);
      path.lineTo(90,75);
      path.lineTo(90,15);
      context.fill(path);
      context.closePath();
      //Shadow of head
      context.beginPath();
      context.fillStyle = "#bb0";
      context.arc(95, 60, 54, 0, 2 * Math.PI);
      context.fill();
      context.closePath();
      //Head
      context.beginPath();
      context.fillStyle = "#ff1";
      context.arc(100, 60, 50, 0, 2 * Math.PI);
      context.fill();
      context.closePath();
      //Body Shadow
      context.beginPath();
      context.fillStyle = "#bb0";
      context.arc(95, 170, 62, 4, 12 * Math.PI);
      context.fill();
      context.closePath();
      //Body
      context.beginPath();
      context.fillStyle = "#ff1";
      context.arc(100, 170, 60, 4, 12 * Math.PI);
      context.fill();
      context.closePath();
      //Eye
      context.beginPath();
      context.fillStyle = "white";
      context.arc(100, 40, 12, 0, 2 * Math.PI);
      context.fill();
      context.closePath();
      //Eyeball
      context.beginPath();
      context.fillStyle = "lightBlue";
      context.arc(100, 44, 7, 8, 2 * Math.PI);
      context.fill();
      context.closePath();

      context.beginPath();
        context.fillStyle = "grey";
      context.translate(210, 60);
      context.arc(00, 90, 40, 61, 2 * Math.PI);
      context.fill();
      context.closePath();



      // context.beginPath();
      // context.fillStyle = "red";
      // context.arc(250, 150, 100, 10, 100 );
      // context.fill();
      // context.closePath();
      //
      // context.beginPath();
      // context.fillStyle = "white";
      // context.arc(250, 150, 60, 10, 100 );
      // context.fill();
      // context.closePath();
      //
      // context.beginPath();
      // context.fillStyle = "red";
      // context.arc(250, 150, 55, 10, 100 );
      // context.fill();
      // context.closePath();


      context.beginPath();
      path.moveTo(175, 50);
      path.moveTo(175,52);
      path.lineTo(190,75);
      path.lineTo(190,15);
      context.closePath();

  // context.fillRect(255,255,0);


  console.log("Drawing a bird");
};

exports.BirdGraphicsComponent = BirdGraphicsComponent;

},{}],2:[function(require,module,exports){
var graphicsComponent = require("../components/graphics/bird");

var Bird = function () {
  console.log("Creating Bird entity");

  var graphics = new graphicsComponent.BirdGraphicsComponent(this);
  this.components = {
    graphics: graphics
  };
};

exports.Bird = Bird;

},{"../components/graphics/bird":1}],3:[function(require,module,exports){
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

},{"./entities/birds.js":2,"./system/graphics":5}],4:[function(require,module,exports){
var flappyBird = require('./flappy_bird');

document.addEventListener('DOMContentLoaded', function () {
  var app = new flappyBird.FlappyBird();
  app.run();
});

},{"./flappy_bird":3}],5:[function(require,module,exports){
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

// exports.GraphicsSystem = GraphicsSystem;

},{}]},{},[4]);
