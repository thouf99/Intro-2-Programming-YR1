/*

Officer: tchow004
CaseNum: 401-2-93802423-1906165

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and
has laced the cream cheese with an ingenious but vicious toxin. This one is quite
deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When insecticide dips below 0.5, strychnine dips below 0.5, and also chlorine dips below 0.66, decrement SodiumBicarbonate by 0.04
	- If lead goes above 0.53 and formaldehyde goes above 0.43, increment SodiumBicarbonate by 0.05
	- When either polonium dips below 0.58, strychnine goes above 0.63, or perhaps formaldehyde goes above 0.46, decrement antivenom by 0.02
	- When insecticide dips below 0.49, lead goes above 0.49, and also chlorine goes above 0.43, increase antivenom by 0.02
	- If strychnine goes above 0.43, formaldehyde goes above 0.44, and also chlorine dips below 0.25, reduce sulphates by 0.02
	- When insecticide dips below 0.74, whilst at the same time, lead dips below 0.36 or polonium goes above 0.75, increment sulphates by 0.05
	- When formaldehyde dips below 0.48 and insecticide dips below 0.42, reduce plasma by 0.04
	- When lead goes above 0.67 and strychnine goes above 0.66, or on the other hand, polonium goes above 0.6, increase plasma by 0.05


Your conditional statements should:

consider the following poisons:

	- strychnine
	- formaldehyde
	- polonium
	- insecticide
	- chlorine
	- lead


and modify the following antidotes:

	- SodiumBicarbonate
	- antivenom
	- sulphates
	- plasma


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var strychnine;
var formaldehyde;
var polonium;
var insecticide;
var chlorine;
var lead;


//Declare the antidote variables
var SodiumBicarbonate;
var antivenom;
var sulphates;
var plasma;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	strychnine = 0.5;
	formaldehyde = 0.5;
	polonium = 0.5;
	insecticide = 0.5;
	chlorine = 0.5;
	lead = 0.5;
	SodiumBicarbonate = 0.5;
	antivenom = 0.5;
	sulphates = 0.5;
	plasma = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 6; i++)
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

//	- When insecticide dips below 0.5, strychnine dips below 0.5, and also chlorine dips below 0.66, decrement SodiumBicarbonate by 0.04
    if(insecticide < 0.5 && strychnine < 0.5 && chlorine < 0.66)
    {
        SodiumBicarbonate -= 0.04;
    }
//	- If lead goes above 0.53 and formaldehyde goes above 0.43, increment SodiumBicarbonate by 0.05
    if(lead > 0.53 && formaldehyde > 0.43)
    {
        SodiumBicarbonate += 0.05;
    }
//	- When either polonium dips below 0.58, strychnine goes above 0.63, or perhaps formaldehyde goes above 0.46, decrement antivenom by 0.02
    if(polonium < 0.58 || strychnine > 0.63 || formaldehyde > 0.46)
    {
        antivenom -= 0.02;
    }
//	- When insecticide dips below 0.49, lead goes above 0.49, and also chlorine goes above 0.43, increase antivenom by 0.02
    if(insecticide < 0.49 && lead > 0.49 && chlorine > 0.43)
    {
        antivenom += 0.02;
    }
//	- If strychnine goes above 0.43, formaldehyde goes above 0.44, and also chlorine dips below 0.25, reduce sulphates by 0.02
    if(strychnine > 0.43 && formaldehyde > 0.44 && chlorine < 0.25)
    {
        sulphates -= 0.02;
    }
//	- When insecticide dips below 0.74, whilst at the same time, lead dips below 0.36 or polonium goes above 0.75, increment sulphates by 0.05
    if(insecticide < 0.74 && (lead < 0.36 || polonium > 0.75))
    {
        sulphates += 0.05;
    }
//	- When formaldehyde dips below 0.48 and insecticide dips below 0.42, reduce plasma by 0.04
    if(formaldehyde < 0.48 && insecticide < 0.42)
    {
        plasma -= 0.04;
    }
//	- When lead goes above 0.67 and strychnine goes above 0.66, or on the other hand, polonium goes above 0.6, increase plasma by 0.05
    if(lead > 0.67  && strychnine > 0.66 || polonium >0.6)
    {
        plasma += 0.05;
    }
    

	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	strychnine = nextValue(graphs[0],strychnine);
	formaldehyde = nextValue(graphs[1],formaldehyde);
	polonium = nextValue(graphs[2],polonium);
	insecticide = nextValue(graphs[3],insecticide);
	chlorine = nextValue(graphs[4],chlorine);
	lead = nextValue(graphs[5],lead);


	SodiumBicarbonate = constrain(SodiumBicarbonate, 0, 1);
	antivenom = constrain(antivenom, 0, 1);
	sulphates = constrain(sulphates, 0, 1);
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
	text('strychnine: ' + nf(strychnine,1,2), 20,20);
	fill(colors[1]);
	text('formaldehyde: ' + nf(formaldehyde,1,2), 20,40);
	fill(colors[2]);
	text('polonium: ' + nf(polonium,1,2), 20,60);
	fill(colors[3]);
	text('insecticide: ' + nf(insecticide,1,2), 20,80);
	fill(colors[4]);
	text('chlorine: ' + nf(chlorine,1,2), 20,100);
	fill(colors[5]);
	text('lead: ' + nf(lead,1,2), 20,120);


	//draw the antidotes bar chart
	drawBar(SodiumBicarbonate,50,'SodiumBicarbonate');
	drawBar(antivenom,200,'antivenom');
	drawBar(sulphates,350,'sulphates');
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
