class Dustbin {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.x = x;
      this.y = y;

      this.dustbinWidth=200;
		  this.dustbinHeight=100;
  	  this.wallThickness=20;
      this.angle=0;	
      
      this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, options);
      this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, options);
      //Matter.Body.setAngle(this.leftWallBody, this.angle);

      this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, options);
      //Matter.Body.setAngle(this.rightWallBody, -1*this.angle);

      World.add(world, this.bottomBody)
		  World.add(world, this.leftWallBody)
		  World.add(world, this.rightWallBody);
    }


    display(){

      var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

      
      //push();
			//translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			//angleMode(RADIANS)
			fill(255)
			//rotate(this.angle)
			rect(posLeft.x,posLeft.y,this.wallThickness, this.dustbinHeight);
			//pop();

      //push()
			//translate(posRight.x, posRight.y);
			rectMode(CENTER)
			//strokeWeight(4);
			//stroke(255)
			//angleMode(RADIANS)
			fill(255)
			//rotate(-1*this.angle)
			rect(posRight.x,posRight.y,this.wallThickness, this.dustbinHeight);
			//pop()

			//push()
			//translate(posBottom.x, posBottom.y);
			rectMode(CENTER)
			//strokeWeight(4);
			//stroke(255)
			//angleMode(RADIANS)
			fill(255)
			rect(posBottom.x,posBottom.y,this.dustbinWidth, this.wallThickness);
			//pop()



      
    }
  };