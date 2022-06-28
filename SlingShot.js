class SlingShot {
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 0.04,
            lenght: 10
        }
        this.pointB=pointB;
        this.sling=Constraint.create(options);
        World.add(world,this.sling)
        this.sling1 = loadImage("sprites/SlingShot1.png");
        this.sling2 = loadImage("sprites/SlingShot2.png");
        this.sling3 = loadImage("sprites/SlingShot3.png");
    }

    attach(body){
        this.sling.bodyA = body;
    }

    fly(){
        this.sling.bodyA=null
    }
    display(){
        image(this.sling1, 220, 22.5);
        image(this.sling2, 195, 20);
        if(this.sling.bodyA){
            push();
            stroke(48,22,8);
            if(this.sling.bodyA.position.x < 220){
                strokeWeight(11);
                line (this.sling.bodyA.position.x-20, this.sling.bodyA.position.y, this.pointB.x-20, this.pointB.y);
                line (this.sling.bodyA.position.x-20, this.sling.bodyA.position.y, this.pointB.x+10, this.pointB.y-3);
                image(this.sling3, this.sling.bodyA.position.x+25, this.sling.bodyA.position.y-10);
            }
            else{
                strokeWeight(3);
                line (this.sling.bodyA.position.x+25, this.sling.bodyA.position.y, this.pointB.x-10, this.pointB.y);
                line (this.sling.bodyA.position.x+25, this.sling.bodyA.position.y, this.pointB.x+30, this.pointB.y-3);
                image(this.sling3, this.sling.bodyA.position.x+25, this.sling.bodyA.position.y-10);
            }
        }
    }
}