/*

The Game Project - 4

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var isFalling; // regular falling down
var isPlummeting; // falling down canyons

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
    
    //controls
    isLeft = false;
    isRight = false;
    isFalling = false;
    isPlummeting = false;
    
     //collectable hat
     collectable = {
        x_pos: 120, 
        y_pos: 420, 
        width:100,
        hieght:50,
        isfound: false
    };
        //Canyon object
    canyon= {
        x_pos: 0,
        width:600
    };
}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

    //collectible hat
    var d = dist(gameChar_x, gameChar_y, collectable.x_pos, collectable.y_pos)
    if (d < 50)
    {
        collectable.isfound = true;
    }
    else{
        collectable.isfound == false;
    }
    if(collectable.isfound == false)
    {
        strokeWeight(4);
        stroke(51);
        fill('#ffcc00');
        ellipse(collectable.x_pos,collectable.y_pos,collectable.width,collectable.hieght);
        strokeWeight(2);
        stroke(51);
        fill('red');
        ellipse(collectable.x_pos,collectable.y_pos,collectable.width-50,collectable.hieght-20);
        strokeWeight(1);
        stroke(51);
        fill('#ffcc00');
        ellipse(collectable.x_pos,collectable.y_pos-20,collectable.width-60,collectable.hieght-5);
    }
    //draw the canyon
    if(gameChar_x > 600 && gameChar_y > 420 && gameChar_x < 650)
    {
        isPlummeting = true;
    }
    if (isPlummeting == true)
    {
        gameChar_y +=10;
    }
    
    if(gameChar_x > 600 && gameChar_y <= 420 && gameChar_x < 650)
    {
        isPlummeting = false;
    }
//    if (isPlummeting == false)
//    {
//        gameChar_y -=10;
//    }
        noStroke();
        fill('#b34700');
        rect(canyon.x_pos,500,canyon.width,canyon.width);
        rect(canyon.x_pos + 650,500,canyon.width,canyon.width);
    
	//the game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code
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
		// add your jumping-right code
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
		// add your walking left code
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
		// add your walking right code
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
        // add your jumping front face code
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
		// add your standing front facing code
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

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
    
    if(isLeft) //the key A
    {
        gameChar_x -=5;
    }
    if(isRight) //the key D
    {
        gameChar_x +=5;
    }
    if(isFalling) //the key W
    {
        gameChar_y -=10;
    }
    if(gameChar_y !=floorPos_y) //gravity
    {
        gameChar_y +=5;
    }
    

}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);

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
        isFalling = true;   
    }
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
    
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
