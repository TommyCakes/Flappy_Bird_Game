var GraphicsSystem = function(entities) {
  this.entities = entities;
};

GraphicsSystem.prototype.run = function() {
  //Tick the graphics system a few to times to see in action!
  for (var i=0; i<5; i++) {
    this.tick()
  }
};

GraphicsSystem.prototype.tick = function() {
  for(var i=0; i<this.entities.length; i++) {
    var entity = this.entities[i]
    // console.log(entity);
    if (!'graphics' in entity.components) {
      continue;
    }

    entity.components.graphics.draw(this.context);
  }
};

exports.GraphicsSystem = GraphicsSystem;
