class Rope {
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:200
       
           }
           
           this.pointB=pointB
         this.sling = Constraint.create(options)
         World.add(world,this.sling)     
    }   
    
    display(){
     strokeWeight(3)
     line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y) 
    
    }
       
    }