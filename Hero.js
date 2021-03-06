class Hero{
constructor(x,y,width,height) {
    var options = {
        isStatic: false,
        restitution: 0,
        friction: 1,
        density: 1.2
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage(("Superhero-01.png"))
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle
    var pos = this.body.position;
    push()
    translate(pos.x, pos.y);
    strokeWeight(0);
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
    imageMode(CENTER)
    image(this.image, 0, 0, this.width, this.height);
    pop()
  }
};