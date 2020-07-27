
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2,
}
var paperObject;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1=createSprite(101,100,30,30);
	box2=createSprite(101,100,30,30);
	box3=createSprite(101,100,30,30);
	Matter.Bodies.circle(70,100,[options]);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,0,0);
  
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body.paperObject.body.position,{x:85,y:85});
	}
}



