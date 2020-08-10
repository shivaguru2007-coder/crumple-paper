class Dustbin
{
	constructor(x,y,width,height)
	{
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;

		this.angle=0;	
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.width,this.height, {isStatic:true})

		World.add(world, this.bottomBody)


	}
	display()
	{
			var posBottom=this.bottomBody.position;

			push()
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			rect(0,0,this.width,this.height);
			pop()
			
	}

}