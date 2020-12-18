const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var engine, world;
var ball1 , ball2 , ball3 , ball4 , ball5
var rope1 , rope2 , rope3 , rope4 , rope5
var backgroundImg,platform;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ball1=new Ball(400,200,25)
    ball2=new Ball(450,200,25)
    ball3=new Ball(500,200,25)
    ball4=new Ball(550,200,25)
    ball5=new Ball(600,200,25)
    rope1=new Rope(ball1.body,{x:400,y:100})
    rope2=new Rope(ball2.body,{x:450,y:100})
    rope3=new Rope(ball3.body,{x:500,y:100})
    rope4=new Rope(ball4.body,{x:550,y:100})
    rope5=new Rope(ball5.body,{x:600,y:100})
}
function draw(){
    background("white")
    Engine.update(engine)
    rope1.display()
    rope2.display()
    rope3.display()
    rope4.display()
    rope5.display()
    ball1.display()
    ball2.display()
    ball3.display()
    ball4.display()
    ball5.display()
}
function keyPressed(){
    if(keyCode===LEFT_ARROW){
        Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-70,y:-50})
    }
}