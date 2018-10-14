//variables for width and height of canvas
var canvasHeight = 500;
var canvasWidth = 500;
//variables to control speed of objects
var xVelocity = 2//Math.random() * 10;
var yVelocity = 2//Math.random() * 10;
//variables to hold the player objects
var player, player2, player3, player4;
//variable to hold the canvas
var canvas;

//class to model the elements which will bounce off of the walls.
//They will be referred to as Players.
class Player
{
	//constructor must now x and y cordinates along with the height and width of object
		constructor(x, y, width, height)
		{
			this.x = x;
			this.y = y;
			this.width = width;
			this.height = height;
			this.xVelocity = xVelocity;
			this.yVelocity = yVelocity;
		}

}

function initializeData ()
{
	canvas = document.getElementById("gameCanvas").getContext("2d");
	player = new Player(0, 0, 32, 32);
	player2 = new Player(468, 468, 32, 32);
	player3 = new Player(468, 0, 32, 32);
	player4 = new Player(0, 469, 32, 32);
}

function drawPlayer ()
{
	//drawBackground();
	canvas.fillStyle = "yellow";
	canvas.fillRect(player.x, player.y, player.width, player.height);
	canvas.fillStyle = "blue";
	canvas.fillRect(player2.x, player2.y, player2.width, player2.height);
	canvas.fillStyle = "red";
	canvas.fillRect(player3.x, player3.y, player3.width, player3.height);
	canvas.fillStyle = "green";
	canvas.fillRect(player4.x, player4.y, player4.width, player4.height);
}

function drawBackground()
{
	canvas.fillStyle = "#008080";
	canvas.fillRect(0,0,canvasHeight,canvasWidth);
}

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

function gameLoop()
{
	drawPlayer();
	movePlayer(player);
	movePlayer(player2);
	movePlayer(player3);
	movePlayer(player4);
}

	window.onload = function()
	{
		initializeData();

		drawBackground();

		var framesPerSecond = 60;
		setInterval (function () {gameLoop()}, 1000/framesPerSecond);
	}
