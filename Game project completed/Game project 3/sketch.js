/*

The Game Project

3 - using variables

*/

var floorPos_y;
var floorPos_x;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position
    floorPos_x = 1024;

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
    
    //tree position
	treePos_x = 800;
	treePos_y = floorPos_y;
    
    //Canyon object
    canyon= {
        x_pos: 0,
        width:900
    };
    
    //collectable object
    collectable = {
        x_pos: 400, 
        y_pos: 400, 
        width:100,
        hieght:50
    };
    
    //mountain object
    mountain = {
        x_pos:400,
        y_pos:432
    };
    
    //cloud object
    cloud = {
        x_pos:150,
        y_pos:100,
        width:80,
        hieght:60
    };
}

function draw()
{
	background(50, 50, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height+floorPos_x, width + floorPos_y); //draw some green ground
    
    //mountain
    noStroke();
    fill(51);
    triangle(mountain.x_pos+50,mountain.y_pos,850,mountain.y_pos,
             mountain.x_pos+250,mountain.y_pos-357);
    triangle(mountain.x_pos,mountain.y_pos,700,mountain.y_pos,
             mountain.x_pos+100,mountain.y_pos-232);
    triangle(mountain.x_pos+250,mountain.y_pos,900,mountain.y_pos,
             mountain.x_pos+400,mountain.y_pos-232);  
    
    //cloud
    noStroke();
	fill('#737373');
    ellipse(cloud.x_pos+50, cloud.y_pos, cloud.width+20, cloud.hieght+15);
    ellipse(cloud.x_pos+100, cloud.y_pos, cloud.width, cloud.hieght);
    ellipse(cloud.x_pos, cloud.y_pos, cloud.width+10, cloud.hieght+20);
    
    //stars
    strokeWeight(4);
    stroke(51);
    fill(255,215,0);
    ellipse(50,20,20,20);
    ellipse(150,40,20,20);
    ellipse(300,30,20,20);
    ellipse(400,60,20,20);
    ellipse(600,70,20,20);
    ellipse(850,100,20,20);
    ellipse(1000,40,20,20);
    ellipse(100,150,20,20);
    ellipse(215,300,20,20);
    ellipse(500,150,20,20);
    ellipse(50,400,20,20);
    ellipse(950,300,20,20);
    
   	//Tree    
    noStroke();
    fill('#800000');
    rect(treePos_x-25,treePos_y-149,50,150)
    noStroke();
    fill('#004d1a');
    ellipse(treePos_x,treePos_y-149,125);
    ellipse(treePos_x+45,treePos_y-107,100);
    ellipse(treePos_x-45,treePos_y-107,100);
    
    //canyon
    noStroke();
    fill('#b34700');
//    rect(canyon.x_pos,500,canyon.width-10,canyon.width);
    rect(canyon.x_pos,500,canyon.width,canyon.width);
    
    //collectible hat
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
    
//  2.Game character
    noStroke();
    fill(0,0,139);
	ellipse(gameChar_x,gameChar_y-27,30,35);
    rect(gameChar_x-10,gameChar_y-17,5,20);
    rect(gameChar_x+5,gameChar_y-17,5,20);
    triangle(gameChar_x-25,gameChar_y-47,gameChar_x+25,gameChar_y-47, 
             gameChar_x-3,gameChar_y-17);
    fill(255,0,0);
    ellipse(gameChar_x,gameChar_y-27, 20, 10);
    
//    fill(255,0,0);
//    ellipse(treePos_x,treePos_y,25,25);
}
    
function mousePressed()
{
    gameChar_x = mouseX;
    gameChar_y = mouseY;
}
