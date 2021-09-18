class Link{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 10
        }
        this.pointB = pointB;
        this.link = Constraint.create(options);
        World.add(world, this.body);
    }
    fly(){
        this.link.bodyA = null;
    }

    Launch(bodyA){
        this.link.bodyA = bodyA
    }

    display(){

    }
}