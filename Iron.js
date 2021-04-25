class Iron {
    constructor(x, y,width,height) {
      var options = {
        'restitution':0.8,
        'friction':3,
        'density':30
      };
      this.body = Bodies.rectangle(x, y, 10,30, options);
      this.width = 30;
      this.height = 50;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
  
      push();
      translate(pos.x, pos.y);
      strokeWeight(3);
      stroke('black')
      fill('brown');
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  