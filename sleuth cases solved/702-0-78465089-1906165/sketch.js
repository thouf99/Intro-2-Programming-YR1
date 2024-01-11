/*

Officer: tchow004
CaseNum: 702-0-78465089-1906165

Case 702 - The case of Vanishing Vannevar
Stage 1 - Mobilise

“Calling all units: the notorious criminal and speedster known as Vanishing Vannevar is on the run.
All cars to mobilise.” Word has it that you’re pretty nifty behind the wheel. I want you in on
this action kid. Get your car on the road by completing the </DRIVE_NAME/> function below.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- increment variables
	- random
	- constrain
	- calling functions

HINT: make sure you take a look at the initialisation of SleuthCar to understand it's properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function Move_Vehicle()
{
	/*
	This function should do the following: 
	 - increment SleuthCar's DistAmount property by its AccelVal property 
	 - add a random amount between -0.1 and 0.1 to SleuthCar's EngineVibrateAmount property
	 - use the constrain function to constrain SleuthCar's EngineVibrateAmount property to values between 0.1 and 0.95
	 - call the Turn_CarMotor function passing SleuthCar as an argument
	*/
    SleuthCar.DistAmount += SleuthCar.AccelVal;
    SleuthCar.EngineVibrateAmount += random(-0.1, 0.1);
    SleuthCar.EngineVibrateAmount = constrain(SleuthCar.EngineVibrateAmount, 0.1, 0.95);
    Turn_CarMotor(SleuthCar);
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var SleuthCar;

var roadWidth = 400;
var roadLeftEdge = 200;
var carImages = {};


function preload()
{
	carImages.detective = loadImage("cars/detective.png");
}

function setup()
{
	createCanvas(800,800);

	SleuthCar = 
	{
		CoordX: roadLeftEdge + roadWidth/4,
		CoordY: 300,
		DistAmount: 0,
		AccelVal: 3,
		EngineVibrateAmount: 0,
		CarCategory: 'detective',
		NumberPlate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);


	Move_Vehicle();


	drawRoad();
	drawCars();
}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad()
{
	stroke(100);
	fill(50);
	rect(roadLeftEdge,0,roadWidth,800);
	stroke(255);

	for(var i = -1; i < 20; i++)
	{
		line(
		roadLeftEdge + roadWidth/2 , i * 100 + (SleuthCar.DistAmount%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (SleuthCar.DistAmount%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(SleuthCar);
	image
	(
		carImages["detective"],
		SleuthCar.CoordX - carImages["detective"].width/2 + random(-SleuthCar.EngineVibrateAmount, SleuthCar.EngineVibrateAmount),
		SleuthCar.CoordY + random(-SleuthCar.EngineVibrateAmount, SleuthCar.EngineVibrateAmount)
	);

}

function Turn_CarMotor(car)
{

	car.exhaust.push({size: 2, x: car.CoordX, y: car.CoordY + carImages[car.CarCategory].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.AccelVal/3);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height)
		{
			car.exhaust.splice(i,1);
		}
	}
}


function drawExhaust(car)
{
		noStroke();
		for(var i = 0; i < car.exhaust.length; i++)
		{
				var alpha = map(car.exhaust[i].size, 0, 40, 50,0);
				fill(125,alpha);
				ellipse(car.exhaust[i].x + 20, car.exhaust[i].y , car.exhaust[i].size);

		}
}
