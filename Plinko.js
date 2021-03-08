class Plinko {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,10,options);
      this.radius = 15
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipse(pos.x, pos.y, 10, 10);
    }
  };
