
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
paper_options={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2
}
	//Create the Bodies Here.
    paper=Matter.Bodies.circle(150, 600, 20, paper_options)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  drawSprites();
  ellipseMode(RADIUS);
  ellipse(paper.position.x,paper.position.y,30,30);
}
function keyPressed(){
if (keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
}

	
}


