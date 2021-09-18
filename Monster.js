class Monster{
	constructor(x, y, width, height) {
	  var options = {
		  isStatic: true,
		  restitution: 0.5,
		  friction: 1
	  }
	  this.body = Bodies.rectangle(x, y, width, height, options);
	  this.width = width;
	  this.height = height;
	  this.image = loadImage("Monster-01.png");
	  World.add(world, this.body);
	}
	display(){
	  var pos = this.body.position;
	  push();
	  translate(pos.x, pos.y);
	  rectMode(CENTER);
	  strokeWeight(2);
	  rect(0, 0, this.width, this.height);
	  imageMode(CENTER)
	  image(this.image, 0, 0, this.width, this.height)
	  pop();
	}
  }