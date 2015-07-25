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
