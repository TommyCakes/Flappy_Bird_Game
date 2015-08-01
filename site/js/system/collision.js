var CollisionSystem = function (entites) {
  this.entites = entites;
};

CollisionSystem.prototype.tick = function () {
  for (var i=0; i<this.entiies.length; i++) {
    var entityA = this.entites[i];
    if (!'collision' in entityA.components) {
      continue;
    }

    for (var j=i+1; j<this.entiies.length; j++) {
      var entityB = this.entites[j];
      if (!'collision' in entityB.components) {
        continue;
    }

    if (!entityA.components.collision.collidesWith(entityB)) {
      continue;
    }
    if (entityA.components.collision.onCollision) {
      entityA.components.collision.onCollision (entityB);
    }

    if (entityB.components.collision.onCollision) {
        entityB.components.collision.onCollision(entityA);
    }
  }
}
};

exports.CollisionSystem = CollisionSystem;
