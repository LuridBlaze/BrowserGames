
const KEY_W = 87;
const KEY_A = 65;
const KEY_S = 83;
const KEY_D = 68;

const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;

var l = 0;

var canvas, canvasContext;

var mouseX = 400;
var mouseY = 300;



function setupInput() {
	canvas.addEventListener('mousemove', updateMousePos);
	canvas.addEventListener('mousedown',mouseClick);	

	document.addEventListener('keydown', keyPressed);
	document.addEventListener('keyup', keyReleased);


	greenCar.setUpInput(KEY_W ,KEY_D ,KEY_S ,KEY_A );
	blueCar.setUpInput(KEY_UP_ARROW ,KEY_RIGHT_ARROW ,KEY_DOWN_ARROW ,KEY_LEFT_ARROW );
}

function updateMousePos(evt) {
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;


	mouseX = evt.clientX - rect.left - root.scrollLeft;
	mouseY = evt.clientY - rect.top - root.scrollTop;

}
      //CHEAT 2.0 ---------------------------------
var n = 0;

function mouseClick(evt) {
	//carSpeedX *= -1;-----------------
	//}

	//function mouseClick(evt) {
	//losingScreen= false;
	//winningScreen = false;
	//livesCount = 3;
	//carReset();
	/* console.log(blueCar.ang);
	if(blueCar.ang == -Math.PI/2) {
		blueCar.ang = 0;
	} else {
		if(blueCar.ang == Math.PI) {
			blueCar.ang = -Math.PI/2;
		} else {
			if(blueCar.ang == Math.PI/2) {
				blueCar.ang = Math.PI;
			} else {
				blueCar.ang = Math.PI/2;
				}
			}
		} */
}

	


function resetFunc1() {

	for (var roww1 = 3;roww1 < TRACK_ROWS;roww1++) {
		for (var coll1 = 0;coll1 < TRACK_COLS;coll1++) {
			
			var arrayIndex = rowColToArrayIndex(coll1, roww1);

			destroyedByCar[arrayIndex] = false;
			
		
		}
	}
}




function destroyedBy() {
counting1G = 4;

	for (var roww = 0;roww < TRACK_ROWS;roww++) {
		for (var coll = 0;coll < TRACK_COLS;coll++) {
			
			var arrayIndex = rowColToArrayIndex(coll, roww);

			if (trackGrid[arrayIndex]==false && destroyedByCar[arrayIndex]==true) {
				counting1G += (TRACK_ROWS - roww);
			}
		}
	}
return counting1G;
}


function keySet(keyEvent,whichCar,setTo) {
	
	
	if (keyEvent.keyCode == whichCar.controlKeyUp) {
		whichCar.keyUpPressed = setTo;

	}

	if (keyEvent.keyCode == whichCar.controlKeyRight) {
		whichCar.keyRightPressed = setTo;

	}

	if (keyEvent.keyCode == whichCar.controlKeyDown) {
		whichCar.keyDownPressed = setTo;

	}
	if (keyEvent.keyCode == whichCar.controlKeyLeft) {
		whichCar.keyLeftPressed = setTo;

	}
	
	//console.log("bobby");
}

function keyPressed(evt) {
	//console.log("key pressed: " + evt.keyCode);
	keySet(evt,greenCar,true);
	keySet(evt,blueCar,true);	
	
}

function keyReleased(evt) {
	//console.log("key released: " + evt.keyCode);
	keySet(evt,greenCar,false);
	keySet(evt,blueCar,false);
	
	
}