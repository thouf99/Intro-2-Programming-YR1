/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.


WARNING: Do not get too carried away. If you're shape takes more than 5 lines
of code to draw then you've probably over done it.


*/

function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
	background(50, 50, 250); //fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, 432, 1024, 144); //draw some green ground

	//1. a cloud in the sky
    noStroke();
	fill('#737373');
    ellipse(200,100,100,75);
    ellipse(250,100,80,60);
    ellipse(150,100,90,80);

	noStroke();
	fill(220);
	text("cloud", 200, 100);

	//2. a mountain in the distance
	noStroke();
    fill(51);
    triangle(450,432,850,432,650,75);
    triangle(400,432,700,432,500,200);
    triangle(650,432,900,432,800,200);    
    
	noStroke();
	fill(255);
	text("mountain", 500, 256);

	//3. a tree
    noStroke();
    fill('#800000');
    rect(780,350,50,150)
    noStroke();
    fill('#004d1a');
    ellipse(805,320,125);
    ellipse(850,380,100);
    ellipse(760,380,100);

	noStroke();
	fill(255);
	text("tree", 800, 346);

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen

	noStroke();
    fill('#b34700');
    rect(0,500,90,100);
    rect(150,500,900,100);

	noStroke();
	fill(255);
	text("canyon", 100, 480);

	//5. a collectable token - eg. a jewel, fruit, coins
	//... add your code here
    strokeWeight(4);
    stroke(51);
    fill('#ffcc00');
    ellipse(400,450,100,50);
    strokeWeight(2);
    stroke(51);
    fill('red');
    ellipse(400,450,50,30);
    strokeWeight(1);
    stroke(51);
    fill('#ffcc00');
    ellipse(400,436,40,40);

	noStroke();
	fill(255);
	text("collectable item", 400, 400);
    
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
    
}
