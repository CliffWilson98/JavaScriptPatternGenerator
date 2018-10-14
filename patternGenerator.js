//variables for width and height of canvas
var canvasHeight = 500;
var canvasWidth = 500;
//variables to control speed of objects
var xVelocity = 2//Math.random() * 10;
var yVelocity = 2//Math.random() * 10;
//variables to hold the player objects
var player, player2//, player3, player4;
//variable to hold the canvas
var canvas;

//class to model the elements which will bounce off of the walls.
//They will be referred to as Players.
class Player
{
	//constructor must know x and y cordinates along with the height and width of object
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

function initializeData ()
{
	canvas = document.getElementById("gameCanvas").getContext("2d");
	document.getElementById("Box1").checked = true;
	player = new Player(0, 0, 32, 32, "yellow");
	player2 = new Player(468, 468, 32, 32, "blue");
	player3 = new Player(468, 0, 32, 32, "red");
	player4 = new Player(0, 468, 32, 32, "green");
}

function drawPlayer (player)
{
	//drawBackground();
	if (player.isVisible == true)
	{
		canvas.fillStyle = player.color;//"yellow";
		canvas.fillRect(player.x, player.y, player.width, player.height);
	}
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
	drawPlayer(player);
	drawPlayer(player2);
	drawPlayer(player3);
	drawPlayer(player4);
	movePlayer(player);
	movePlayer(player2);
	movePlayer(player3);
	movePlayer(player4);
	checkBoxManager();
}

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

function randomizeVelocity()
{
	drawBackground();
	player.x = 0;
	player.y = 0;
	player2.x = 468;
	player2.y = 468;
	player.xVelocity = Math.random() * 10;
	player.yVelocity = Math.random() * 10;
	player2.xVelocity = Math.random() * 10;
	player2.yVelocity = Math.random() * 10;
}

function checkBoxManager()
{
	player.isVisible = document.getElementById("Box1").checked;
	player2.isVisible = document.getElementById("Box2").checked;
	player3.isVisible = document.getElementById("Box3").checked;
	player4.isVisible = document.getElementById("Box4").checked;
}



	window.onload = function()
	{
		initializeData();

		drawBackground();

		var framesPerSecond = 60;
		setInterval (function () {gameLoop()}, 1000/framesPerSecond);
	}
