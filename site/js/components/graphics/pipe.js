var PipeGraphicsComponent = function(entity){
  this.entity = entity;
};

PipeGraphicsComponent.prototype.draw = function(context) {
  // console.log(this.entity.components.physics.position);

  var path = new Path2D();
  var position = this.entity.components.physics.position;

  context.save();
  context.translate(position.x, position.y);
  context.beginPath();
  context.fillRect(0, 0, 100, 60);
  context.fill();
  context.closePath();
  context.restore();
  console.log("Pipe!");
  console.log(context);
};
exports.PipeGraphicsComponent = PipeGraphicsComponent;
