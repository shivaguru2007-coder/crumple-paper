
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 400);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	d1 = new Dustbin(1340,335,200,20);
	d2 = new Dustbin(1430,250,20,150);
	d3 = new Dustbin(1250,250,20,150);
	paperObject=new Paper(300,320,40);
	groundObject=new Ground(800,350,1600,20);
	//Create a Ground
	


	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  d1.display();
  d2.display();
  d3.display();
  paperObject.display();
  groundObject.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:98,y:-85});
    
  	}
}








