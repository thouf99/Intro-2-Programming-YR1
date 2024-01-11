/*

Officer: tchow004
CaseNum: 303-2-34619699-1906165

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	When the mouse button is pressed:
	- Make secretVaultValue0 equal to the value of mouseX
	- Use the 'min' function to prevent secretVaultValue0 from going above 8

	When the mouse button is released:
	- Decrement secretVaultValue1 by 1
	- Use the 'max' function to prevent secretVaultValue1 from falling below 3

	Whilst the mouse is being dragged:
	- Make secretVaultValue2 equal to the value of mouseY
	- Use the 'min' function to prevent secretVaultValue2 from going above 19

	When any key is released:
	- Decrement secretVaultValue3 by 3
	- Use the 'max' function to prevent secretVaultValue3 from falling below 4

	Whilst the mouse is being dragged:
	- Make secretVaultValue4 equal to the value of mouseY
	- Use the 'max' function to prevent secretVaultValue4 from falling below 16



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

var secretVaultValue0;
var secretVaultValue1;
var secretVaultValue2;
var secretVaultValue3;
var secretVaultValue4;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	secretVaultValue0 = 0;
	secretVaultValue1 = 0;
	secretVaultValue2 = 0;
	secretVaultValue3 = 0;
	secretVaultValue4 = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...

function mousePressed()
{
//   	When the mouse button is pressed:
//	- Make secretVaultValue0 equal to the value of mouseX
//	- Use the 'min' function to prevent secretVaultValue0 from going above 8 
    secretVaultValue0 = mouseX;
    secretVaultValue0 = min(secretVaultValue0,8);
}

function mouseReleased()
{
// When the mouse button is released:
//	- Decrement secretVaultValue1 by 1
//	- Use the 'max' function to prevent secretVaultValue1 from falling below 3
    secretVaultValue1 -= 1;
    secretVaultValue1 = max(secretVaultValue1,3);

}

function mouseDragged()
{
//    	Whilst the mouse is being dragged:
//	- Make secretVaultValue2 equal to the value of mouseY
//	- Use the 'min' function to prevent secretVaultValue2 from going above 19
    secretVaultValue2 = mouseY;
    secretVaultValue2 = min(secretVaultValue2, 19);
//	Whilst the mouse is being dragged:
//	- Make secretVaultValue4 equal to the value of mouseY
//	- Use the 'max' function to prevent secretVaultValue4 from falling below 16
    secretVaultValue4 = mouseY;
    secretVaultValue4 = max(secretVaultValue4, 16);
}

function keyReleased()
{
//    	When any key is released:
//	- Decrement secretVaultValue3 by 3
//	- Use the 'max' function to prevent secretVaultValue3 from falling below 4
    secretVaultValue3 -= 3;
    secretVaultValue3 = max(secretVaultValue3, 4);
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
	drawDial(140,secretVaultValue0, 11);
	pop();

	push();
	translate(120,380);
	drawDial(140,secretVaultValue1, 24);
	pop();

	push();
	translate(280,170);
	drawDial(140,secretVaultValue2, 25);
	pop();

	push();
	translate(280,380);
	drawDial(140,secretVaultValue3, 26);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(secretVaultValue4);
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
