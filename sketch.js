
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobDiameter;
var roof1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   bobObject1 = new bob(400,550,50);
   bobObject2 = new bob(475,550,50);
   bobObject3 = new bob(325,550,50);
   roof1 = new ground(400,150,400,20);
   rope1 = new rope(bobObject1.body,roof1.body,bobDiameter*2,0);
   rope2 = new rope(bobObject2.body,roof1.body,bobDiameter*2,0);
   rope3 = new rope(bobObject3.body,roof1.body,bobDiameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  drawSprites();
 
}



