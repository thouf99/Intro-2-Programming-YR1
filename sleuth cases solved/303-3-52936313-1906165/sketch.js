/*

Officer: tchow004
CaseNum: 303-3-52936313-1906165

Case 303 - The Case of the Crooked Attorney
Stage 4 - The Courthouse

Torvalds has his final safe in his courthouse chambers. Luckily there is a court case proceeding.
You can sneak into his chambers whilst he makes his closing statement.

Crack the safe by doing the following:

	When the mouse button is released:
	- Use the 'map' function to scale mouseX to values ranging from 2 to 14.
	- Assign the output to secureLockerCombA

	Whilst the mouse is being dragged:
	- Use the 'map' function to scale mouseY to values ranging from 2 to 9.
	- Assign the output to secureLockerCombB

	When any key is released:
	- Make secureLockerCombC equal to the value of 'keyCode'

	When the mouse button is pressed:
	- Use the 'map' function to scale mouseY to values ranging from 15 to 78.
	- Assign the output to secureLockerCombD

	When the mouse button is released:
	- Use the 'map' function to scale mouseY to values ranging from 13 to 77.
	- Assign the output to secureLockerCombE

	Whilst the mouse is moving:
	- Use the 'map' function to scale mouseX to values ranging from 10 to 76.
	- Assign the output to secureLockerCombF



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- key, keyCode
	- random
	- map

*/

//declare the variables

var secureLockerCombA;
var secureLockerCombB;
var secureLockerCombC;
var secureLockerCombD;
var secureLockerCombE;
var secureLockerCombF;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	secureLockerCombA = 0;
	secureLockerCombB = "";
	secureLockerCombC = "";
	secureLockerCombD = 0;
	secureLockerCombE = 0;
	secureLockerCombF = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...

function mouseReleased()
{
   //	When the mouse button is released:
//	- Use the 'map' function to scale mouseX to values ranging from 2 to 14.
//	- Assign the output to secureLockerCombA
    secureLockerCombA = map(mouseX, 0, 512, 2, 14); 
//	When the mouse button is released:
//	- Use the 'map' function to scale mouseY to values ranging from 13 to 77.
//	- Assign the output to secureLockerCombE
    secureLockerCombE = map(mouseY,0,512,13,77);
}

function mouseDragged()
{
//    Whilst the mouse is being dragged:
//	- Use the 'map' function to scale mouseY to values ranging from 2 to 9.
//	- Assign the output to secureLockerCombB
    secureLockerCombB = map(mouseY, 0,512, 2,9);
}

function keyReleased()
{
//    When any key is released:
//	- Make secureLockerCombC equal to the value of 'keyCode'
    secureLockerCombC = keyCode;
}

function mousePressed()
{
//    	When the mouse button is pressed:
//	- Use the 'map' function to scale mouseY to values ranging from 15 to 78.
//	- Assign the output to secureLockerCombD
    secureLockerCombD = map(mouseY, 0,512, 15,78);
}

function mouseMoved()
{
//    Whilst the mouse is moving:
//	- Use the 'map' function to scale mouseX to values ranging from 10 to 76.
//	- Assign the output to secureLockerCombF
    secureLockerCombF = map(mouseX,0,512,10,76);
}

///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dial
	push();
	translate(256,180);
	drawDial(170,secureLockerCombA,20);
	pop();

	//Draw the spinners
	push();
	translate(206,280);
	drawSpinner(3, secureLockerCombB);
	pop();

	push();
	translate(306,280);
	drawSpinner(3, secureLockerCombC);
	pop();

	//Draw the levers
	push();
	translate(125,356);
	drawLever(secureLockerCombD);
	pop();

	push();
	translate(250,356);
	drawLever(secureLockerCombE);
	pop();

	push();
	translate(375,356);
	drawLever(secureLockerCombF);
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

function drawSpinner(numSpinners, val)
{
	var sw = 20;
	var ow = (sw + 5) * numSpinners + 5;
	stroke(0);
	fill(100);
	rect(-ow/2,0,ow,35);
	if(typeof(val) == "number")
	{
		val = floor(val).toString(); //convert to string
	}
	var d = numSpinners - val.length;

	for(var d = numSpinners - val.length; d > 0; d--)
	{
		val = "-" + val;
	}

	for(var i = 0; i < numSpinners; i++)
	{
		stroke(0);
		fill(255,255,200);
		rect(-ow/2 + i * (sw + 5) + 5,5,20,25);
		fill(0);
		noStroke();
		text(val[i],-ow/2 + sw/2 + i * (sw +5),25);
	}

}
