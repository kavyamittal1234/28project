class Mango {
    constructor(x, y) {
      var options = {
          isStatic:true,
          'restitution':0.8,
          'friction':1.0,
          'density':1.5
      }
      this.body = Bodies.circle(x, y, 50, options);
      this.r =50;
      
      this.image=loadImage("mango.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
     image(this.image,0,0,this.r,this.r);
      pop();
    }
  };
  