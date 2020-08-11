
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;
function preload(){
	paperImg=loadImage("paper.png");
	dImage=loadImage("dust.png")
}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	papers=createSprite(200,450);
	papers.addImage("paper.png",paperImg);
	papers.scale=0.2;
	dustbins=createSprite(1200,500);
    dustbins.addImage("dust.png",dImage)
	dustbinObj=new dustbin(1200,650);
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);
	//Create a Ground
	

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  papers.x=paperObject.body.position.x;
  papers.y=paperObject.body.position.y;
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  
 
  drawSprites();
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-105});
    
  	}
}





