/*

Officer: tchow004
CaseNum: 401-3-69348409-1906165

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final
stand he has set up his own cupcake shop. The laced cupcakes look delicious but
they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have
to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When Snake_Venom dips below 0.39, novichok goes above 0.44, and also strychnine goes above 0.74, decrease opioids by 0.02
	- If insecticide dips below 0.52, arsenic dips below 0.65, hemlock goes above 0.37, and also chlorine dips below 0.42, raise opioids by 0.01
	- If arsenic dips below 0.74, or on the other hand, lead dips below 0.31 and insecticide dips below 0.64, try decreasing Calcium_Chloride by 0.01
	- If Snake_Venom goes above 0.54 or strychnine dips below 0.56, whilst at the same time, hemlock dips below 0.63, raise Calcium_Chloride by 0.05
	- When Snake_Venom dips below 0.47 and lead dips below 0.51, or on the other hand, insecticide dips below 0.31 or novichok dips below 0.39, decrease sulphates by 0.03
	- If either strychnine goes above 0.37, arsenic goes above 0.58, or perhaps hemlock dips below 0.71, increment sulphates by 0.04
	- When novichok dips below 0.73, hemlock goes above 0.38, and also lead dips below 0.28, decrement calcium_gluconate by 0.03
	- When chlorine goes above 0.41, arsenic dips below 0.5, and also strychnine dips below 0.67, raise calcium_gluconate by 0.05
	- If insecticide goes above 0.52 or novichok dips below 0.32, whilst at the same time, arsenic dips below 0.32, decrease antitoxin by 0.03
	- When strychnine goes above 0.31, lead dips below 0.56, and also Snake_Venom dips below 0.54, try increasing antitoxin by 0.03


Your conditional statements should:

consider the following poisons:

	- hemlock
	- lead
	- insecticide
	- Snake_Venom
	- novichok
	- strychnine
	- chlorine
	- arsenic


and modify the following antidotes:

	- opioids
	- Calcium_Chloride
	- sulphates
	- calcium_gluconate
	- antitoxin


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var hemlock;
var lead;
var insecticide;
var Snake_Venom;
var novichok;
var strychnine;
var chlorine;
var arsenic;


//Declare the antidote variables
var opioids;
var Calcium_Chloride;
var sulphates;
var calcium_gluconate;
var antitoxin;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	hemlock = 0.5;
	lead = 0.5;
	insecticide = 0.5;
	Snake_Venom = 0.5;
	novichok = 0.5;
	strychnine = 0.5;
	chlorine = 0.5;
	arsenic = 0.5;
	opioids = 0.5;
	Calcium_Chloride = 0.5;
	sulphates = 0.5;
	calcium_gluconate = 0.5;
	antitoxin = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 8; i++)
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
//    	- When Snake_Venom dips below 0.39, novichok goes above 0.44, and also strychnine goes above 0.74, decrease opioids by 0.02
    if(Snake_Venom < 0.39 && novichok > 0.44 && strychnine > 0.74)
    {
        opioids -= 0.02;
    }
//	- If insecticide dips below 0.52, arsenic dips below 0.65, hemlock goes above 0.37, and also chlorine dips below 0.42, raise opioids by 0.01
    if(insecticide < 0.52 && arsenic < 0.65 && hemlock > 0.37 && chlorine < 0.42)
    {
        opioids += 0.01;
    }
//	- If arsenic dips below 0.74, or on the other hand, lead dips below 0.31 and insecticide dips below 0.64, try decreasing Calcium_Chloride by 0.01
    if(arsenic < 0.74 || (lead < 0.31 && insecticide < 0.64))
    {
        Calcium_Chloride -= 0.01;
    }
 
//	- If Snake_Venom goes above 0.54 or strychnine dips below 0.56, whilst at the same time, hemlock dips below 0.63, raise Calcium_Chloride by 0.05
    if((Snake_Venom > 0.54 || strychnine < 0.56) && hemlock < 0.63)
    {
        Calcium_Chloride += 0.05;
    }

//	- When Snake_Venom dips below 0.47 and lead dips below 0.51, or on the other hand, insecticide dips below 0.31 or novichok dips below 0.39, decrease sulphates by 0.03
    if(Snake_Venom < 0.47 && lead < 0.51 || (insecticide < 0.31 || novichok < 0.39))
    {
        sulphates -= 0.03;
    }
//	- If either strychnine goes above 0.37, arsenic goes above 0.58, or perhaps hemlock dips below 0.71, increment sulphates by 0.04
    if(strychnine > 0.37 || arsenic > 0.58 || hemlock < 0.71)
    {
        sulphates += 0.04;
    }
//	- When novichok dips below 0.73, hemlock goes above 0.38, and also lead dips below 0.28, decrement calcium_gluconate by 0.03
    if(novichok < 0.73 && hemlock > 0.38 && lead < 0.28)
    {
        calcium_gluconate -= 0.03;
    }
//	- When chlorine goes above 0.41, arsenic dips below 0.5, and also strychnine dips below 0.67, raise calcium_gluconate by 0.05
    if(chlorine > 0.41 && arsenic < 0.5 && strychnine < 0.67)
    {
        calcium_gluconate += 0.05; 
    }
//	- If insecticide goes above 0.52 or novichok dips below 0.32, whilst at the same time, arsenic dips below 0.32, decrease antitoxin by 0.03
    if((insecticide > 0.52 || novichok < 0.32) && arsenic < 0.32)
    {
        antitoxin -= 0.03;
    }

//	- When strychnine goes above 0.31, lead dips below 0.56, and also Snake_Venom dips below 0.54, try increasing antitoxin by 0.03
    if(strychnine > 0.31 && lead < 0.56 && Snake_Venom < 0.54)
    {
        antitoxin += 0.03;
    }

	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	hemlock = nextValue(graphs[0],hemlock);
	lead = nextValue(graphs[1],lead);
	insecticide = nextValue(graphs[2],insecticide);
	Snake_Venom = nextValue(graphs[3],Snake_Venom);
	novichok = nextValue(graphs[4],novichok);
	strychnine = nextValue(graphs[5],strychnine);
	chlorine = nextValue(graphs[6],chlorine);
	arsenic = nextValue(graphs[7],arsenic);


	opioids = constrain(opioids, 0, 1);
	Calcium_Chloride = constrain(Calcium_Chloride, 0, 1);
	sulphates = constrain(sulphates, 0, 1);
	calcium_gluconate = constrain(calcium_gluconate, 0, 1);
	antitoxin = constrain(antitoxin, 0, 1);


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
		color(0, 255, 255),
		color(255, 100, 100),
		color(255, 100, 0)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('hemlock: ' + nf(hemlock,1,2), 20,20);
	fill(colors[1]);
	text('lead: ' + nf(lead,1,2), 20,40);
	fill(colors[2]);
	text('insecticide: ' + nf(insecticide,1,2), 20,60);
	fill(colors[3]);
	text('Snake_Venom: ' + nf(Snake_Venom,1,2), 20,80);
	fill(colors[4]);
	text('novichok: ' + nf(novichok,1,2), 20,100);
	fill(colors[5]);
	text('strychnine: ' + nf(strychnine,1,2), 20,120);
	fill(colors[6]);
	text('chlorine: ' + nf(chlorine,1,2), 20,140);
	fill(colors[7]);
	text('arsenic: ' + nf(arsenic,1,2), 20,160);


	//draw the antidotes bar chart
	drawBar(opioids,50,'opioids');
	drawBar(Calcium_Chloride,200,'Calcium_Chloride');
	drawBar(sulphates,350,'sulphates');
	drawBar(calcium_gluconate,500,'calcium_gluconate');
	drawBar(antitoxin,650,'antitoxin');


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
