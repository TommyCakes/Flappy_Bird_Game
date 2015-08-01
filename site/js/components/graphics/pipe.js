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
