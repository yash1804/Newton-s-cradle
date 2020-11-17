
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob;
var ground;
var roof;
var rope1, bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob = new Bob(170,500,40,40);
bob2 = new Bob(250,500,40,40);
bob3 = new Bob(330,500,40,40);
bob4 = new Bob(410,500,40,40);
bob5 = new Bob(490,500,40,40);
ground = new Ground(400,690,800,20);
roof = new Roof(400,300,450,30);
rope1 = new Rope(bob.body,roof.body,- 150,0)
rope2 = new Rope(bob2.body,roof.body,-70,0)
rope3 = new Rope(bob3.body,roof.body,10,0)
rope4 = new Rope(bob4.body,roof.body,90,0)
rope5 = new Rope(bob5.body,roof.body,170,0)
	Engine.run(engine);
  
}


function draw() {
  
  rectMode(CENTER);
  background("green");
  bob.display()
  ground.display()
  bob2.display()
bob3.display()
bob4.display()
bob5.display()
roof.display()
rope1.display()
rope2.display()
rope3.display()
rope4.display()
rope5.display()

  drawSprites();
 
}



