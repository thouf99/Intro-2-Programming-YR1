/*

The Game Project 6 - Side scrolling

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var scrollPos;

var clouds;
var mountains;
var trees_x;
var canyons;
var collectable_items;


function setup()
{
	createCanvas(1024, 576, WEBGL);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Initialise arrays of scenery objects.
    
    
    trees_x = [
        -925,-750,-575,-400,-225,-50,125,300,475,650,825,1000,1175,1350,1525,   
    ];
    
    clouds = [
        {x_pos: 40, y_pos: 200, width: 65, hieght: 30},
        {x_pos: 150, y_pos: 50, width: 100, hieght: 80},
        {x_pos: 320, y_pos: 150, width: 80, hieght: 90},
        {x_pos: 575, y_pos: 50, width: 70, hieght: 50},
        {x_pos: 800, y_pos: 120, width: 80, hieght: 40},
        {x_pos: 1040, y_pos: 200, width: 65, hieght: 30},
        {x_pos: 1250, y_pos: 50, width: 100, hieght: 80},
        {x_pos: 1420, y_pos: 150, width: 80, hieght: 90},
        {x_pos: 1675, y_pos: 50, width: 70, hieght: 50},
        {x_pos: 1900, y_pos: 120, width: 80, hieght: 40},
        {x_pos: -40, y_pos: 200, width: 65, hieght: 30},
        {x_pos: -150, y_pos: 50, width: 100, hieght: 80},
        {x_pos: -320, y_pos: 150, width: 80, hieght: 90},
        {x_pos: -575, y_pos: 50, width: 70, hieght: 50},
        {x_pos: -800, y_pos: 120, width: 80, hieght: 40}
    ];
    
    mountains = [
        {x_pos: 400, y_pos: 432},
        {x_pos: 1000, y_pos: 432},
        {x_pos: -400, y_pos: 432},
        {x_pos: -1000, y_pos: 432}
    ];
    
    canyons = [
        {x_pos: 0, width: 575},
        {x_pos: 625, width: 200},
        {x_pos: 875, width: 100},
        {x_pos: 1025, width: 700},
        {x_pos: -575, width: 500},
        {x_pos: -825, width: 200},
        {x_pos: -1400, width: 525}
        
    ];
    collectable_items = [
        {x_pos: 400, y_pos: 432, width: 100, hieght: 50},
        {x_pos: 300, y_pos: 432, width: 100, hieght: 50},
        {x_pos: 700, y_pos: 432, width: 100, hieght: 50},
        {x_pos: 925, y_pos: 432, width: 100, hieght: 50},
        {x_pos: 1150, y_pos: 432, width: 100, hieght: 50},
        {x_pos: 1350, y_pos: 432, width: 100, hieght: 50},
        {x_pos: 1650, y_pos: 432, width: 100, hieght: 50},
        {x_pos: -125, y_pos: 432, width: 100, hieght: 50},
        {x_pos: -400, y_pos: 432, width: 100, hieght: 50},
        {x_pos: -750, y_pos: 432, width: 100, hieght: 50},
        {x_pos: -925, y_pos: 432, width: 100, hieght: 50},
        {x_pos: -1250, y_pos: 432, width: 100, hieght: 50},
        {x_pos: -1350, y_pos: 432, width: 100, hieght: 50}
    ];
}

function draw()
{
	background(50, 50, 255); // fill the sky blue
    orbitControl();
	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height/4); // draw some green ground
    
    push();
    translate(scrollPos,0);
    
	// Draw clouds.
    for (var j = 0; j < clouds.length; j++)
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

	// Draw mountains.
    for (var m = 0; m < mountains.length; m++)
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
	
    // Draw trees.
    for (var t = 0; t < trees_x.length; t++)
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
	
    // Draw canyons
    for (var c = 0; c < canyons.length; c++)
    {
        noStroke();
        fill('#b34700');
        rect(canyons[c].x_pos,500,canyons[c].width,canyons[c].width);
    }
    
	// Draw collectable items
    for (var h = 0; h < collectable_items.length; h++)
    {
        strokeWeight(4);
        stroke(51);
        fill('#ffcc00');
        ellipse(collectable_items[h].x_pos,collectable_items[h].y_pos,
                collectable_items[h].width,collectable_items[h].hieght);
        strokeWeight(2);
        stroke(51);
        fill('red');
        ellipse(collectable_items[h].x_pos,collectable_items[h].y_pos,
                collectable_items[h].width-50,collectable_items[h].hieght-20);
        strokeWeight(1);
        stroke(51);
        fill('#ffcc00');
        ellipse(collectable_items[h].x_pos,collectable_items[h].y_pos-20,
                collectable_items[h].width-60,collectable_items[h].hieght-5);
    }
    
    pop();
    
	// Draw the game character - this must be last
        noStroke();
        fill(0,100,255);
        ellipse(gameChar_x,gameChar_y-27,30,35);
        rect(gameChar_x-10,gameChar_y-17,5,20);
        rect(gameChar_x+5,gameChar_y-17,5,20);
        triangle(gameChar_x-25,gameChar_y-47,
                 gameChar_x+25,gameChar_y-47, 
                 gameChar_x-3,gameChar_y-17);
        fill(255,0,0);
        ellipse(gameChar_x,gameChar_y-25, 20, 10);
    
    
    
	//////// Game character logic ///////
	// Logic to move

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
}

function keyPressed()
{

	if(key == 'A' || keyCode == 37)
	{
		isLeft = true;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = true;
	}

}

function keyReleased()
{
	if(key == 'A' || keyCode == 37)
	{
		isLeft = false;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = false;
	}
}
