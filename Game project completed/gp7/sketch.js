/* Thouficul Chowdhury

The Game Project 7 - Bring it all together

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var gameChar_world_x;

var clouds;
var mountains;
var canyons;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;

	// Initialise arrays of scenery objects.
        trees_x = [
        -4750,-4450,-4050,-3875,-3400,-3000,-2750,-2525,-2225,-1975, -1525, -1075, -875,-670, -375, -100,100, 375, 670, 875, 1075, 1525, 1975, 2225, 2750, 3000, 3400, 3875, 4050, 4450, 4750
    ];
    
    clouds = [];
    
    mountains = [];
    
    canyons = [
        {x_pos: 0, width: 90},
        {x_pos: 625, width: 85},
        {x_pos: 875, width: 75},
        {x_pos: 1025, width: 95},
        {x_pos: 1275, width: 95},
        {x_pos: 1500, width: 75},
        {x_pos: 1850, width: 80},
        {x_pos: 2150, width: 90},
        {x_pos: 2350, width: 60},
        {x_pos: 2850, width: 75},
        
        {x_pos: -625, width: 85},
        {x_pos: -875, width: 75},
        {x_pos: -1025, width: 90},
        {x_pos: -1275, width: 90},
        {x_pos: -1500, width: 75},
        {x_pos: -1850, width: 80},
        {x_pos: -2150, width: 90}
        
        
    ];
    
    collectable_items = [
        {x_pos: 100, y_pos: 432, width: 100, hieght: 50, isfound: false},
        {x_pos: 300, y_pos: 432, width: 100, hieght: 50, isfound: false},
        {x_pos: 700, y_pos: 370, width: 100, hieght: 50, isfound: false},
        {x_pos: 925, y_pos: 370, width: 100, hieght: 50, isfound: false},
        {x_pos: 1150, y_pos: 432, width: 100, hieght: 50, isfound: false},
        {x_pos: 1350, y_pos: 432, width: 100, hieght: 50, isfound: false},
        {x_pos: 1650, y_pos: 432, width: 100, hieght: 50, isfound: false},
        {x_pos: 1900, y_pos: 432, width: 100, hieght: 50, isfound: false},
        {x_pos: 2050, y_pos: 360, width: 100, hieght: 50, isfound: false},
        {x_pos: 2350, y_pos: 432, width: 100, hieght: 50, isfound: false},
        {x_pos: -125, y_pos: 432, width: 100, hieght: 50, isfound: false},
        {x_pos: -400, y_pos: 432, width: 100, hieght: 50, isfound: false},
        {x_pos: -750, y_pos: 432, width: 100, hieght: 50, isfound: false},
        {x_pos: -925, y_pos: 370, width: 100, hieght: 50, isfound: false},
        {x_pos: -1250, y_pos: 432, width: 100, hieght: 50, isfound: false},
        {x_pos: -1350, y_pos: 432, width: 100, hieght: 50, isfound: false},
        {x_pos: -1450, y_pos: 370, width: 100, hieght: 50, isfound: false},
        {x_pos: -1750, y_pos: 432, width: 100, hieght: 50, isfound: false},
        {x_pos: -1900, y_pos: 432, width: 100, hieght: 50, isfound: false},
        {x_pos: -2050, y_pos: 370, width: 100, hieght: 50, isfound: false},
        {x_pos: -2350, y_pos: 432, width: 100, hieght: 50, isfound: false},
    ];
}

function draw()
{
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height/4); // draw some green ground
    
    //falling code
    if(gameChar_y !=floorPos_y) //gravity
    {
        gameChar_y +=5;
    }
    push();
    translate(scrollPos,0);
	
    // Draw clouds.
    drawClouds()
	
    // Draw mountains.
    drawMountains()
	
    // Draw trees.
    drawTrees()
	
    // Draw canyons.
    for (var c = 0; c < canyons.length; c++)
    {
        drawCanyon(canyons[c]);
        checkCanyon(canyons[c]);
        
    }
	// Draw collectable items.
    
    for (var h = 0; h < collectable_items.length; h++)
    {
        //if collectible is not found then draw collectible
        if(!collectable_items[h].isfound)
        {
            drawCollectable(collectable_items[h]);
        }
        
        checkCollectable(collectable_items[h]);
    }
    
    pop();
	// Draw game character.
	
	drawGameChar();
    
	// Logic to make the game character move or the background scroll.
	if(isLeft)
	{
		if(gameChar_x > width * 0.2)
		{
			gameChar_x -= 5;
		}
		else
		{
			scrollPos += 5;
		}
	}

	if(isRight)
	{
		if(gameChar_x < width * 0.8)
		{
			gameChar_x  += 5;
		}
		else
		{
			scrollPos -= 5; // negative for moving against the background
		}
	}
    
    
	// Logic to make the game character rise and fall.
    if(isFalling) //the key W
    {
        gameChar_y -=15;
    }
    if(gameChar_y !=floorPos_y) //gravity
    {
        gameChar_y +=5;
    }
    
    
	// Update real position of gameChar for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;
}


// ---------------------
// Key control functions
// ---------------------

function keyPressed()
{
	console.log("press" + keyCode);
	console.log("press" + key);
    
    if(keyCode == 65) //the key A
    {
        isLeft = true;
    }
    if(keyCode == 68) //the key D 
    {
        isRight = true;
    }
    if(keyCode == 87) //the key W
    {
        gameChar_y -=100;
        isFalling = true;   
    }
}

function keyReleased()
{
	console.log("release" + keyCode);
	console.log("release" + key);
    if(keyCode == 65) //the key A
    {
        isLeft = false;
    }
    if(keyCode == 68) //the key D
    {
        isRight = false;
    }
    if(keyCode == 87) //the key W
    {
        isFalling = false;
    }
}


// ------------------------------
// Game character render function
// ------------------------------

// Function to draw the game character.

function drawGameChar()
{
	// draw game character
	if(isLeft && isFalling)
	{
        fill(0,100,255);
        noStroke();
        ellipse(gameChar_x-15,gameChar_y-47,20,35);
        rect(gameChar_x-23,gameChar_y-73,5,20);
        rect(gameChar_x-13,gameChar_y-37,5,20);
        rect(gameChar_x-20,gameChar_y-37,5,20);
        fill(255,0,0);
        ellipse(gameChar_x-15,gameChar_y-47, 20, 10);
	}
	else if(isRight && isFalling)
	{
        noStroke();
        fill(0,100,255);
        ellipse(gameChar_x+15,gameChar_y-47,20,35);
        rect(gameChar_x+18,gameChar_y-73,5,20);
        rect(gameChar_x+17,gameChar_y-37,5,20);
        rect(gameChar_x+10,gameChar_y-37,5,20);
        fill(255,0,0);
        ellipse(gameChar_x+15,gameChar_y-47, 20, 10);
    }
	else if(isLeft)
	{
        noStroke();
        fill(0,100,255);
        ellipse(gameChar_x-15,gameChar_y-27,20,35);
        rect(gameChar_x-23,gameChar_y-17,5,20);
        rect(gameChar_x-17,gameChar_y-57,5,20);
        fill(255,0,0);
        ellipse(gameChar_x-15,gameChar_y-27, 20, 10);
	}
	else if(isRight)
	{
        noStroke();
        fill(0,100,255);
        ellipse(gameChar_x+15,gameChar_y-27,20,35);
        rect(gameChar_x+17,gameChar_y-17,5,20);
        rect(gameChar_x+13,gameChar_y-57,5,20);
        fill(255,0,0);
        ellipse(gameChar_x+15,gameChar_y-27, 20, 10);
	}
	else if(isFalling || isPlummeting)
	{
		noStroke();
        fill(0,100,255);
        ellipse(gameChar_x,gameChar_y-27,30,35);
        rect(gameChar_x-10,gameChar_y-17,5,20);
        rect(gameChar_x+5,gameChar_y-17,5,20);
        triangle(gameChar_x-25,gameChar_y-47,gameChar_x+25,gameChar_y-47, 
                 gameChar_x-3,gameChar_y-17);
        fill(255,0,0);
        ellipse(gameChar_x,gameChar_y-25, 20, 10);
	}
	else
	{
        noStroke();
        fill(0,100,255);
        ellipse(gameChar_x,gameChar_y-27,30,35);
        rect(gameChar_x-10,gameChar_y-17,5,20);
        rect(gameChar_x+5,gameChar_y-17,5,20);
        triangle(gameChar_x-25,gameChar_y-47,gameChar_x+25,gameChar_y-47, 
                 gameChar_x-3,gameChar_y-17);
        fill(255,0,0);
        ellipse(gameChar_x,gameChar_y-25, 20, 10);
	}
}

// ---------------------------
// Background render functions
// ---------------------------

// Function to draw cloud objects.
function drawClouds()
{
    for (var a = 0; a < 2000; a++)
    {
        clouds.push({
            x_pos: random(-5000, 5000),
            y_pos: random(20, 200),
            width: random(65, 100),
            hieght: random(30,90)
        })
    }
    for (var j = 0; j < 100; j++)
    {
        noStroke();
        fill('#737373');
        ellipse(clouds[j].x_pos + 50, clouds[j].y_pos, 
                clouds[j].width + 20, clouds[j].hieght+15)
        ellipse(clouds[j].x_pos+100, clouds[j].y_pos, 
                clouds[j].width, clouds[j].hieght)
        ellipse(clouds[j].x_pos, clouds[j].y_pos, 
                clouds[j].width+10, clouds[j].hieght+20)
    }
}
// Function to draw mountains objects.
function drawMountains()
{
    //mountain array push
    for(var n =0; n < 50; n++)
    {
        mountains.push({
            x_pos: random(-5000,5000),
            y_pos: 432
        })
    }
    //mountain draw
    for (var m = 0; m < 50; m++)
    {
        noStroke();
        fill(51);
        triangle(mountains[m].x_pos + 50, mountains[m].y_pos,
                 mountains[m].x_pos +450, mountains[m].y_pos,
                 mountains[m].x_pos + 250, mountains[m].y_pos - 357);
        triangle(mountains[m].x_pos, mountains[m].y_pos,
                 mountains[m].x_pos + 300, mountains[m].y_pos,
                 mountains[m].x_pos + 100, mountains[m].y_pos -232);
        triangle(mountains[m].x_pos + 250, mountains[m].y_pos,
                 mountains[m].x_pos + 550, mountains[m].y_pos,
                 mountains[m].x_pos + 400, mountains[m].y_pos -232);
    }
}
// Function to draw trees objects.
function drawTrees()
{
    //trees array push
    for(var s = 0; s < 100; s++)
    {
        trees_x.push({
            x_pos: random(-5000, 5000),
            y_pos: floorPos_y,
           
        })
    }
    //trees draw
    for (var t = 0; t < 100; t++)
    {
        noStroke();
        fill('#800000');
        rect(trees_x[t]-25, floorPos_y-149, 50, 150)
        noStroke();
        fill('#004d1a');
        ellipse(trees_x[t], floorPos_y-149, 125);
        ellipse(trees_x[t]+45, floorPos_y-107, 100);
        ellipse(trees_x[t]-45, floorPos_y-107, 100);
    }
}

// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon)
{
    noStroke();
    fill('#b34700');
    rect(t_canyon.x_pos,floorPos_y,t_canyon.width,t_canyon.width);
}

// Function to check character is over a canyon.

function checkCanyon(t_canyon)
{
    if (gameChar_world_x >=t_canyon.x_pos && 
        gameChar_world_x <= (t_canyon.x_pos + t_canyon.width) && gameChar_y >= floorPos_y)
    {
        isPlummeting = true;
        gameChar_y +=10;
    }
    if (gameChar_y < floorPos_y)
    {
       isPlummeting = false;
    }
}


// ----------------------------------
// Collectable items render and check functions
// ----------------------------------

// Function to draw collectable objects.

function drawCollectable(t_collectable)
{
    strokeWeight(4);
    stroke(51);
    fill('#ffcc00');
    ellipse(t_collectable.x_pos,t_collectable.y_pos,
            t_collectable.width,t_collectable.hieght);
    strokeWeight(2);
    stroke(51);
    fill('red');
    ellipse(t_collectable.x_pos,t_collectable.y_pos,
            t_collectable.width-50,t_collectable.hieght-20);
    strokeWeight(1);
    stroke(51);
    fill('#ffcc00');
    ellipse(t_collectable.x_pos,t_collectable.y_pos-20,
            t_collectable.width-60,t_collectable.hieght-5);
}

// Function to check character has collected an item.

function checkCollectable(t_collectable)
{
    var d = dist(gameChar_world_x, gameChar_y, t_collectable.x_pos, t_collectable.y_pos)
    if (d < 50)
    {
        t_collectable.isfound = true;
    }
    if(t_collectable.isfound == false);
}
