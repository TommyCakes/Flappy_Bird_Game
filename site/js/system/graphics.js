var GraphicsStystem = function(entites) {
  this.entities = entities;
};

GraphicsSystem.prototype.run = function() {
  //Tick the graphics system a few to times to see in action!
  for (var i=0; i<5: i++) {
    this.tick()
  }
};

GraphicsSystem.prototype.tick = function() {
  for(var i=0; i<this.emtities.length; i++) {
    var entity = this.entities[i]
    if (!'graphics' in enitity.components) {
      continue;
    }

    entity.components.graphics.draw(this.context);
  }
};

exports.GraphicsSystem = GraphicsStystem;
