/*

Officer: tchow004
CaseNum: 401-1-87243617-1906165

Case 401 - The Case of Norbert's Weiner Stand
Stage 2 - Toxic Burrito

Norbert is at it again. This time he’s set up a burrito stall and is lacing burritos
with his foul toxin. The chaos is spreading. People are dropping like flies and burrito
sales have fallen through the floor. To make matters worse it seems Norbert has cottoned
on to our methods and has upped the complexity of his poison. You’ll find the antidote
harder to develop this time. So kid, head down to the lab and get working.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- If mercury dips below 0.51, decrease hydrochloricAcid by 0.05
	- If arsenic dips below 0.38 or methanol goes above 0.67, try increasing hydrochloricAcid by 0.01
	- When mercury goes above 0.33, try decreasing Calcium_Gluconate by 0.01
	- If chlorine dips below 0.28 or methanol dips below 0.43, increase Calcium_Gluconate by 0.03
	- When chlorine dips below 0.69, decrease aspirin by 0.05
	- When methanol goes above 0.52 or arsenic goes above 0.37, increment aspirin by 0.02
	- When arsenic goes above 0.64 and methanol dips below 0.42, reduce plasma by 0.05
	- When chlorine dips below 0.29, increase plasma by 0.04


Your conditional statements should:

consider the following poisons:

	- chlorine
	- mercury
	- methanol
	- arsenic


and modify the following antidotes:

	- hydrochloricAcid
	- Calcium_Gluconate
	- aspirin
	- plasma


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var chlorine;
var mercury;
var methanol;
var arsenic;


//Declare the antidote variables
var hydrochloricAcid;
var Calcium_Gluconate;
var aspirin;
var plasma;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	chlorine = 0.5;
	mercury = 0.5;
	methanol = 0.5;
	arsenic = 0.5;
	hydrochloricAcid = 0.5;
	Calcium_Gluconate = 0.5;
	aspirin = 0.5;
	plasma = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 4; i++)
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

//- If mercury dips below 0.51, decrease hydrochloricAcid by 0.05
//	- If arsenic dips below 0.38 or methanol goes above 0.67, try increasing hydrochloricAcid by 0.01
//	- When mercury goes above 0.33, try decreasing Calcium_Gluconate by 0.01
//	- If chlorine dips below 0.28 or methanol dips below 0.43, increase Calcium_Gluconate by 0.03
//	- When chlorine dips below 0.69, decrease aspirin by 0.05
//	- When methanol goes above 0.52 or arsenic goes above 0.37, increment aspirin by 0.02
//	- When arsenic goes above 0.64 and methanol dips below 0.42, reduce plasma by 0.05
//	- When chlorine dips below 0.29, increase plasma by 0.04
    
    if(mercury < 0.51)
    {
        hydrochloricAcid -= 0.05
    }
    if(arsenic < 0.38 || methanol > 0.67)
    {
       hydrochloricAcid += 0.01;
    }
    if(mercury > 0.33)
    {
        Calcium_Gluconate -= 0.01;
    }
    if(chlorine < 0.28 || methanol < 0.43)
    {
        Calcium_Gluconate += 0.03;
    }
    if(chlorine < 0.69)
    {
        aspirin -= 0.05;
    }
    if(methanol > 0.52 || arsenic > 0.37)
    {
        aspirin += 0.02; 
    }
    if(arsenic > 0.64 && methanol < 0.42)
    {
        plasma -= 0.05;
    }
    if(chlorine < 0.29)
    {
        plasma += 0.04;
    }

	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	chlorine = nextValue(graphs[0],chlorine);
	mercury = nextValue(graphs[1],mercury);
	methanol = nextValue(graphs[2],methanol);
	arsenic = nextValue(graphs[3],arsenic);


	hydrochloricAcid = constrain(hydrochloricAcid, 0, 1);
	Calcium_Gluconate = constrain(Calcium_Gluconate, 0, 1);
	aspirin = constrain(aspirin, 0, 1);
	plasma = constrain(plasma, 0, 1);


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
	text('mercury: ' + nf(mercury,1,2), 20,40);
	fill(colors[2]);
	text('methanol: ' + nf(methanol,1,2), 20,60);
	fill(colors[3]);
	text('arsenic: ' + nf(arsenic,1,2), 20,80);


	//draw the antidotes bar chart
	drawBar(hydrochloricAcid,50,'hydrochloricAcid');
	drawBar(Calcium_Gluconate,200,'Calcium_Gluconate');
	drawBar(aspirin,350,'aspirin');
	drawBar(plasma,500,'plasma');


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
