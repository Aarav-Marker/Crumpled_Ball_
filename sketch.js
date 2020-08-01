var ball;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


function setup() {
	createCanvas(800, 400);

	ball = createSprite(300,200,20,20);
	ball.shapeColor='blue';
	ground=createSprite(400,350,800,10);
	ground.shapeColor='rgb(255, 203, 43)';
	box1=createSprite(550,340,100,10);
	box1.shapeColor='red';
	box2=createSprite(500,305,10,80);
	box2.shapeColor='red';
	box3=createSprite(600,305,10,80);
	box3.shapeColor='red';
	engine = Engine.create();
	world = engine.world;

	ball = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	World.add(world, ball);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 
	 if (keyDown(UP_ARROW)){
		 ball.displace(box1);
	 }

	
  
}


function draw() {
  rectMode(CENTER);
  background(rgb(64, 249, 228));
  Engine.run(engine);
  

  drawSprites();
  
}

function ketPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:300,y:300});
	}
}
