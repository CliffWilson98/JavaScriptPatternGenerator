//variables for width and height of canvas
var canvasHeight = 500;
var canvasWidth = 500;
//variables to control speed of objects
var xVelocity = 2
var yVelocity = 2
//variables to hold the player objects
var player, player2//, player3, player4;
//variable to hold the canvas
var canvas;
//variable to keep track of whether a trail should be
//displayed for the moving squares.
var trailOn;

//class to model the elements which will bounce off of the walls.
//They will be referred to as Players.
class Player
{
	//constructor must know x and y cordinates, height, width, and color
		constructor(x, y, width, height, color)
		{
			this.x = x;
			this.y = y;
			this.width = width;
			this.height = height;
			this.color = color;
			this.xVelocity = xVelocity;
			this.yVelocity = yVelocity;
			this.isVisible = false;
		}

}

//function to initialize the essential game data.
//A reference is made to the html canvas element and
//the status of the checkboxes is checked. The four square
//objects are created also.
function initializeData ()
{
	canvas = document.getElementById("gameCanvas").getContext("2d");
	document.getElementById("Box1").checked = true;
	document.getElementById("trail").checked = true;
	player = new Player(0, 0, 32, 32, "yellow");
	player2 = new Player(468, 468, 32, 32, "blue");
	player3 = new Player(468, 0, 32, 32, "red");
	player4 = new Player(0, 468, 32, 32, "green");
}

//the drawPlayer function will check to see if the player is visible or not
// and fill the canvas at the players coordinates with the appropriate color.
function drawPlayer (player)
{
	if (player.isVisible == true)
	{
		canvas.fillStyle = player.color;
		canvas.fillRect(player.x, player.y, player.width, player.height);
	}
}

//function which will fill the background of the canvas in
function drawBackground()
{
	canvas.fillStyle = "#008080";
	canvas.fillRect(0,0,canvasHeight,canvasWidth);
}

//the movePlayer function is responsible for moving the squares and keeping them
//within the bounds of the canvas. If their x or y coordinates go out of
//the bounds of the canvas then their velocity in the given direction is
//reversed to create a bouncing off of the walls effect.
function movePlayer(player)
{
	if (player.x > 468 || player.x < 0)
	{
		player.xVelocity = player.xVelocity * -1;
	}
	if (player.y > 468 || player.y < 0)
	{
		player.yVelocity = player.yVelocity * -1;
	}
	player.x += player.xVelocity;
	player.y += player.yVelocity;
}

//the game loop will loop infinitely.
function gameLoop()
{
	//if the players should not displaay a trail then the drawBackground function
	//is called in order to redraw the background. This will get rid of any trail
	//that has been left by the squares.
	if (trailOn == false)
	{
		drawBackground();
	}
	//the four squares are drawn and moved
	drawPlayer(player);
	drawPlayer(player2);
	drawPlayer(player3);
	drawPlayer(player4);
	movePlayer(player);
	movePlayer(player2);
	movePlayer(player3);
	movePlayer(player4);
	//the checkBoxManager will update the status of the checkboxes.
	checkBoxManager();
}

//restart sets the simulation back to how it was on page load.
function restart()
{
	drawBackground();
	player.x = 0;
	player.y = 0;
	player.xVelocity = 2;
	player.yVelocity = 2;
	player2.x = 468;
	player2.y = 468;
	player2.xVelocity = 2;
	player2.yVelocity = 2;
	player3.x = 468;
	player3.y = 0;
	player3.xVelocity = 2;
	player3.yVelocity = 2;
	player4.x = 0;
	player4.y = 468;
	player4.xVelocity = 2;
	player4.yVelocity = 2;
}

//randomPositionSpawn will spawn each square at a random position
function randomPositionSpawn()
{
	drawBackground();
	player.x = Math.random() * 468;
	player.y = Math.random() * 468;
	player2.x = Math.random() * 468;
	player2.y = Math.random() * 468;
	player3.x = Math.random() * 468;
	player3.y = Math.random() * 468;
	player4.x = Math.random() * 468;
	player4.y = Math.random() * 468;
}

//randomizeVelocity will get every square a different random velocity
function randomizeVelocity()
{
	drawBackground();
	player.xVelocity = Math.random() * 10;
	player.yVelocity = Math.random() * 10;
	player2.xVelocity = Math.random() * 10;
	player2.yVelocity = Math.random() * 10;
	player3.xVelocity = Math.random() * 10;
	player3.yVelocity = Math.random() * 10;
	player4.xVelocity = Math.random() * 10;
	player4.yVelocity = Math.random() * 10;
}

//randomizeVelocitySynced will assign the first square a random velocity
//and then assign every other square the same speed.
function randomizeVelocitySynced()
{
	drawBackground();
	player.xVelocity = Math.random() * 10;
	player.yVelocity = Math.random() * 10;
	player2.xVelocity = 	player.xVelocity ;
	player2.yVelocity = 	player.yVelocity;
	player3.xVelocity = 	player.xVelocity ;
	player3.yVelocity = 	player.yVelocity;
	player4.xVelocity = 	player.xVelocity ;
	player4.yVelocity = 	player.yVelocity;

}

//checkBoxManager will keep track of whether or not the different checkboxes are
//checked and alter the javascript variables accordingly.
function checkBoxManager()
{
	trailOn = document.getElementById("trail").checked;
	player.isVisible = document.getElementById("Box1").checked;
	player2.isVisible = document.getElementById("Box2").checked;
	player3.isVisible = document.getElementById("Box3").checked;
	player4.isVisible = document.getElementById("Box4").checked;
}

//when the window is loaded the data is initialized and the canvas background
//is drawn. The gameLoop is then set to run 60 times every second.
window.onload = function()
{
	initializeData();

	drawBackground();

	let framesPerSecond = 60;
	setInterval (function () {gameLoop()}, 1000/framesPerSecond);
}
