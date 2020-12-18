class Ball{
    constructor(x, y, width) {
        var options = {
            "restitution":1,
            'friction':0,
            'density':2.0
        }
        this.body = Bodies.circle(x, y, width,  options);
        this.width = width;
        
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        
        ellipseMode(RADIUS);
        ellipse(0, 0, this.width,this.width );
        pop();
      }
}