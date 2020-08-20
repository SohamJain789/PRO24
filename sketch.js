
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperBall,ground,dust;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground (200,370,700,20);
    paperBall = new Ball (200,280,30);
    dust = new Dustbin(20,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperBall.display();
  ground.display();
  dust.display();
  drawSprites();
 
}



