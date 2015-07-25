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
