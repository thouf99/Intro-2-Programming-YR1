/*

Officer: tchow004
CaseNum: 303-2-30814970-1906165

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	When the mouse button is pressed:
	- Make HiddenStorageKey_A equal to the value of mouseX
	- Use the 'constrain' function to prevent HiddenStorageKey_A from falling below 4 and going above 16

	Whilst the mouse is moving:
	- Decrement HiddenStorageKey_B by 2
	- Use the 'max' function to prevent HiddenStorageKey_B from falling below 4

	When the mouse button is pressed:
	- Make HiddenStorageKey_C equal to the value of mouseY
	- Use the 'min' function to prevent HiddenStorageKey_C from going above 13

	When the mouse button is pressed:
	- Decrement HiddenStorageKey_D by 1
	- Use the 'constrain' function to prevent HiddenStorageKey_D from falling below 2 and going above 18

	Whilst the mouse is being dragged:
	- Make HiddenStorageKey_E equal to the value of mouseY
	- Use the 'max' function to prevent HiddenStorageKey_E from falling below 22



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var HiddenStorageKey_A;
var HiddenStorageKey_B;
var HiddenStorageKey_C;
var HiddenStorageKey_D;
var HiddenStorageKey_E;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	HiddenStorageKey_A = 0;
	HiddenStorageKey_B = 0;
	HiddenStorageKey_C = 0;
	HiddenStorageKey_D = 0;
	HiddenStorageKey_E = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...

function mousePressed()
{
//    	When the mouse button is pressed:
//	- Make HiddenStorageKey_A equal to the value of mouseX
//	- Use the 'constrain' function to prevent HiddenStorageKey_A from falling below 4 and going above 16
    HiddenStorageKey_A = mouseX
    HiddenStorageKey_A = constrain(HiddenStorageKey_A, 4, 16);
//    When the mouse button is pressed:
//	- Make HiddenStorageKey_C equal to the value of mouseY
//	- Use the 'min' function to prevent HiddenStorageKey_C from going above 13
    HiddenStorageKey_C = mouseY;
    HiddenStorageKey_C = min(HiddenStorageKey_C, 13);
//    When the mouse button is pressed:
//	- Decrement HiddenStorageKey_D by 1
//	- Use the 'constrain' function to prevent HiddenStorageKey_D from falling below 2 and going above 18
    HiddenStorageKey_D -= 1;
    HiddenStorageKey_D = constrain(HiddenStorageKey_D, 2, 18);
}

function mouseMoved()
{
//    Whilst the mouse is moving:
//	- Decrement HiddenStorageKey_B by 2
//	- Use the 'max' function to prevent HiddenStorageKey_B from falling below 4
    HiddenStorageKey_B -= 2;
    HiddenStorageKey_B = max(HiddenStorageKey_B, 4);

}

function mouseDragged()
{
//    Whilst the mouse is being dragged:
//	- Make HiddenStorageKey_E equal to the value of mouseY
//	- Use the 'max' function to prevent HiddenStorageKey_E from falling below 22
    HiddenStorageKey_E = mouseY;
    HiddenStorageKey_E = max(HiddenStorageKey_A, 22);
}

///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dials
	push();
	translate(120,170);
	drawDial(140,HiddenStorageKey_A, 21);
	pop();

	push();
	translate(120,380);
	drawDial(140,HiddenStorageKey_B, 25);
	pop();

	push();
	translate(280,170);
	drawDial(140,HiddenStorageKey_C, 17);
	pop();

	push();
	translate(280,380);
	drawDial(140,HiddenStorageKey_D, 22);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(HiddenStorageKey_E);
	pop();


}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}
