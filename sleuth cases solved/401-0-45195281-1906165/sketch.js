/*

Officer: tchow004
CaseNum: 401-0-45195281-1906165

Case 401 - The Case of Norbert's Weiner Stand
Stage 1 - Noxious Weiner

Console city has been plunged into chaos. The notorious poisoner Norbert has struck the
population down with a potent poison. Word has it that he is smuggling his venomous filth
via a streetside weiner stand. Hundreds of people have been affected, and the municipal
water company tells me that their sewers are at full capacity. This is no laughing matter.
I need you to head down to our lab and work on an antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following:


You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- If AmanitaMushrooms dips below 0.4, decrease glucagon by 0.04
	- When alcohol dips below 0.55, raise glucagon by 0.02
	- If alcohol goes above 0.3, reduce antitoxin by 0.01
	- If chlorine goes above 0.71, try increasing antitoxin by 0.03
	- If alcohol dips below 0.34, reduce calcium_chloride by 0.01
	- When AmanitaMushrooms dips below 0.43, increment calcium_chloride by 0.01


Your conditional statements should:

consider the following poisons:

	- chlorine
	- AmanitaMushrooms
	- alcohol


and modify the following antidotes:

	- glucagon
	- antitoxin
	- calcium_chloride


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var chlorine;
var AmanitaMushrooms;
var alcohol;


//Declare the antidote variables
var glucagon;
var antitoxin;
var calcium_chloride;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	chlorine = 0.5;
	AmanitaMushrooms = 0.5;
	alcohol = 0.5;
	glucagon = 0.5;
	antitoxin = 0.5;
	calcium_chloride = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 3; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}

function draw()
{

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...
//- If AmanitaMushrooms dips below 0.4, decrease glucagon by 0.04
//	- When alcohol dips below 0.55, raise glucagon by 0.02
//	- If alcohol goes above 0.3, reduce antitoxin by 0.01
//	- If chlorine goes above 0.71, try increasing antitoxin by 0.03
//	- If alcohol dips below 0.34, reduce calcium_chloride by 0.01
//	- When AmanitaMushrooms dips below 0.43, increment calcium_chloride by 0.01
    if(AmanitaMushrooms < 0.4)
    {
        glucagon -= 0.04;
    }
    if(alcohol < 0.55)
    {
        glucagon += 0.02;
    }
    if(alcohol > 0.3)
    {
        antitoxin -= 0.01;
    }
    if(chlorine > 0.71)
    {
        antitoxin += 0.03;
    }
    if(alcohol < 0.34)
    {
        calcium_chloride -= 0.01;
    }
    if(AmanitaMushrooms < 0.43)
    {
        calcium_chloride += 0.01;
    }

	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	chlorine = nextValue(graphs[0],chlorine);
	AmanitaMushrooms = nextValue(graphs[1],AmanitaMushrooms);
	alcohol = nextValue(graphs[2],alcohol);


	glucagon = constrain(glucagon, 0, 1);
	antitoxin = constrain(antitoxin, 0, 1);
	calcium_chloride = constrain(calcium_chloride, 0, 1);


	///////// DO NOT CHANGE THE CODE BELOW ///////////

	//drawing code

	// set background
	background(0);
	noFill();

	//draw the graphs for the vitals
	var colors = [
	color(255, 0, 0),
	color(0, 255, 0),
	color(0, 0, 255),
	color(255, 0, 255),
	color(255, 255, 0),
	color(0, 255, 255)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('chlorine: ' + nf(chlorine,1,2), 20,20);
	fill(colors[1]);
	text('AmanitaMushrooms: ' + nf(AmanitaMushrooms,1,2), 20,40);
	fill(colors[2]);
	text('alcohol: ' + nf(alcohol,1,2), 20,60);


	//draw the antidotes bar chart
	drawBar(glucagon,50,'glucagon');
	drawBar(antitoxin,200,'antitoxin');
	drawBar(calcium_chloride,350,'calcium_chloride');


}

function nextValue(graph, val)
{
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03,0.03);

	val += delta;
	if(val > 1 || val < 0)
	{
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph)
{
	//draws an array as a graph
	beginShape();
	for(var i = 0; i < graph.length; i++)
	{
			vertex(width * i/512, height * 0.5 - graph[i]* height/3)
	}
	endShape();
}


function drawBar(val, x, name)
{
	//draws the bars for bar chart
    noStroke();
    fill(0,100,100);
	var mh = height * 0.4 - 50;
	rect(x,(height - 50) - val*mh, 100, val*mh);
    fill(255);
	text(name + ": " + val, x, height - 20);
}
