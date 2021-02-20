//========================================Car1



var leftFrontBump = false;

const WEIRD_ONE = 0.012;
const MIN_SPEED_TO_TURN = 0.32;

carLength = 30;
carHeight = 16;

function carClass() {
	

	this.addbool2 = true;
	this.addbool = false;
	this.wins = 0;
	this.bums = 0;
	this.timE = 1;

	this.wins = 0;
	this.x = 400;
	this.y = 300;
	this.speed = 0;
	this.myCar;//which picture to use
	this.ang = 0;//Math.PI/2;

	this.name = "Untitled Car";	

	this.keyDownPressed = false;
	this.keyUpPressed = false;
	this.keyRightPressed = false;
	this.keyLeftPressed = false;
	
	this.controlKeyUp;
	this.controlKeyRight;
	this.controlKeyDown;
	this.controlKeyLeft;

	this.setUpInput = function(upKey,rightKey,downKey,leftKey) {

		this.controlKeyUp = upKey;
		this.controlKeyRight = rightKey;
		this.controlKeyDown = downKey;
		this.controlKeyLeft = leftKey;	

	}


	this.reset = function(whichImage, carName) {	
		

		this.addbool2 = true;
		this.addbool = false;
		
		this.bums = 0;
		this.timE = 1;
		
		this.name = carName;
		
		this.myCarPic = whichImage;
		
		this.speed = 0;
		
		for(var eachRow = 0;eachRow < TRACK_ROWS;eachRow++) {
			for(var eachCol=0;eachCol < TRACK_COLS;eachCol++) {
	
				var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
 
				if(trackGrid[arrayIndex] == TRACK_PLAYERSTART) {
					trackGrid[arrayIndex] = TRACK_ROAD;
					
					this.ang = 0;
					this.x = eachCol * TRACK_W + TRACK_W/2;
					this.y = eachRow * TRACK_H + TRACK_H/2;
					return;
					
				} 	// end of IF2
			} 	// end of FOR each column
		}	// end of FOR each row
		console.log("NO PLAYER STARTING POSITION FOUND!");
	} //end of carReset func



	this.move = function() {
		var carAntiAccDown = 0;
		var carAntiAccUp = 0;
	

		const GROUNDSPEED_DECAY_MULT = 0.98;
		const DRIVE_POWER = 0.085;
		const REVERSE_POWER = 0.08;
		const TURN_RATE = 0.02;


		this.speed *= GROUNDSPEED_DECAY_MULT ;
		

		if(Math.abs(this.speed) > MIN_SPEED_TO_TURN) {

	 		if(this.keyLeftPressed == true) { //===================LEFT KEY
				if(this.speed > 0) {
	 				this.ang -= TURN_RATE // * 1/ (carSpeed + 0.3) ;//0.016
				}
				if(this.speed < 0 ) {
	 				this.ang += TURN_RATE // * 1/ (carSpeed + 0.3) ;
				}
		
	 		}
	 		if(this.keyRightPressed == true) { //===================RIGHT KEY
	 			if(this.speed > 0) {
	 				this.ang += TURN_RATE // * 1/ (carSpeed + 0.3) ;//0.016
				}
				if(this.speed < 0 ) {
	 				this.ang -= TURN_RATE // * 1/ (carSpeed + 0.3) ;
				}
	 		}
		}	

		if(this.keyUpPressed) {
	      		this.speed += DRIVE_POWER;
	 	}
	 	if(this.keyDownPressed) { 
	      		this.speed -= REVERSE_POWER;
			
	 	}	
	
		this.x += Math.cos(this.ang) * this.speed;
		this.y += Math.sin(this.ang) * this.speed;
		
		carTrackHandling(this);


	}
	this.draw = function() {
		drawBitmapCenteredWithRotation(this.myCarPic, this.x,this.y, this.ang);
	}
}