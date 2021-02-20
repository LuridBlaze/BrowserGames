



//===========================Support
var counting1G = 0;
var livesCount = 3;

var losingScreen= false;
var winningScreen = false;

var timE = 0;


var destroyedByCar = new Array(TRACK_COLS * TRACK_ROWS);

var blueCar = new carClass();
var greenCar = new carClass();


window.onload = function() {
	canvas = document.getElementById('Butterflies');
	canvasContext = canvas.getContext('2d');

	colorRect(0,0, canvas.width,canvas.height, 'grey');
	colorText("LOADING IMAGES", canvas.width/2 - 100,canvas.height/2, 'gold');

	loadImages();

}

levelNull = 0;
levelOne = 1;
levelTwo = 2;
levelThree = 3;

function ImageLoadingDoneSoStartGame() {
	
		
	var framesPerSecond = 10000000;
	setInterval(updateAll,1000/framesPerSecond);
	
	setupInput();
	loadLevel(Math.floor(Math.random()*10) % (griddy.length-1));

}

function loadLevel(whichLevel) {
	trackGrid = griddy[whichLevel+1].slice();
	//trackGrid = griddy[whichLevel];
	blueCar.reset(carPic, "Green Shredder") ;
	greenCar.reset(otherCarPic, "Magma Storm") ;
	console.log(whichLevel);
	//resetFunc1();
}

function updateAll() {
	moveAll();
	drawAll();

}



function moveAll() {
	

	blueCar.move();
	greenCar.move();	

	/*if(blueCar.ang >= Math.PI*2) {
		blueCar.ang -= Math.PI*2;
	}	
	if(blueCar.ang <=  -Math.PI*2) {
		blueCar.ang -=Math.PI*2;
	}
	carTrackHandling(blueCar);
	carTrackHandling(greenCar);
	*/

}

function clearScreen() {
	colorRect(0,0, canvas.width,canvas.height, 'black'); //clear screen (black)(refill so the paths are not seen)
}


function drawAll() {

	//clearScreen();	

	//colorCircle(carX,carY, 10, 'white');//draw a car
	
	drawTracks();
	
	blueCar.draw();
	greenCar.draw();

	var mouseTrackCol = Math.floor(mouseX / TRACK_W);
	var mouseTrackRow = Math.floor(mouseY / TRACK_H);
	var trackIndexUnderMouse = rowColToArrayIndex(mouseTrackCol, mouseTrackRow);

	//if (mouseY <= TRACK_H * TRACK_ROWS) { --------------------------
	/*
	if(blueCar.speed > 0)  {
		colorText(blueCar.speed, mouseX,mouseY, 'yellow');
	} else if(blueCar.speed == 0) {
		colorText(blueCar.speed, mouseX,mouseY, 'yellow');
	} else {
		colorText(blueCar.speed, mouseX,mouseY, 'yellow');
	}
	*/
	//=======================================win conditions

	/*
	if (winningScreen == true) {
		finalScore = destroyedBy();
		colorRect(0,0, canvas.width,canvas.height, 'black'); //clear screen (black)(refill so the paths are not seen)3
		colorText('Congratulations,you won!!', 300,250, 'yellow');
		colorText('You earned ' + finalScore + ' points for destroying all of the tracks', 250,325, 'yellow');
		colorText('Click to play again     (M1)', 300,400, 'white');	
	}*/
	//update
	
	document.getElementById("someOutput").innerHTML = "Magma Storm " + greenCar.wins + " : " + blueCar.wins + " Illusory Shadow";
	
}





