/*

Officer: tchow004
CaseNum: 401-3-65915343-1906165

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final
stand he has set up his own cupcake shop. The laced cupcakes look delicious but
they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have
to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When amanitaMushrooms dips below 0.67 or sarin dips below 0.34, or on the other hand, alcohol dips below 0.38 and methanol dips below 0.59, decrease sulphates by 0.03
	- If lead goes above 0.36 and formaldehyde dips below 0.46, whilst at the same time, strychnine goes above 0.57 or ricin goes above 0.48, increase sulphates by 0.02
	- When formaldehyde goes above 0.75 or sarin goes above 0.35, whilst at the same time, methanol dips below 0.31 and lead goes above 0.48, reduce antibodies by 0.02
	- When alcohol dips below 0.68, amanitaMushrooms dips below 0.49, and also strychnine goes above 0.4, increment antibodies by 0.03
	- If sarin goes above 0.67 and ricin dips below 0.44, or on the other hand, formaldehyde dips below 0.39, decrease aspirin by 0.05
	- When alcohol goes above 0.71 or lead dips below 0.5, or on the other hand, strychnine goes above 0.73 and amanitaMushrooms goes above 0.66, increment aspirin by 0.04
	- If alcohol goes above 0.31 or strychnine goes above 0.32, whilst at the same time, amanitaMushrooms dips below 0.73 or lead dips below 0.59, decrement glucagon by 0.03
	- When sarin dips below 0.46, ricin goes above 0.46, and also methanol dips below 0.53, increment glucagon by 0.05
	- If alcohol goes above 0.32 and sarin goes above 0.49, whilst at the same time, strychnine dips below 0.52 or lead goes above 0.4, decrement paracetamol by 0.01
	- If amanitaMushrooms goes above 0.72, whilst at the same time, formaldehyde goes above 0.64 or ricin dips below 0.47, increment paracetamol by 0.05


Your conditional statements should:

consider the following poisons:

	- methanol
	- strychnine
	- ricin
	- alcohol
	- amanitaMushrooms
	- lead
	- sarin
	- formaldehyde


and modify the following antidotes:

	- sulphates
	- antibodies
	- aspirin
	- glucagon
	- paracetamol


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var methanol;
var strychnine;
var ricin;
var alcohol;
var amanitaMushrooms;
var lead;
var sarin;
var formaldehyde;


//Declare the antidote variables
var sulphates;
var antibodies;
var aspirin;
var glucagon;
var paracetamol;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	methanol = 0.5;
	strychnine = 0.5;
	ricin = 0.5;
	alcohol = 0.5;
	amanitaMushrooms = 0.5;
	lead = 0.5;
	sarin = 0.5;
	formaldehyde = 0.5;
	sulphates = 0.5;
	antibodies = 0.5;
	aspirin = 0.5;
	glucagon = 0.5;
	paracetamol = 0.5;


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

//    	- When amanitaMushrooms dips below 0.67 or sarin dips below 0.34, or on the other hand, alcohol dips below 0.38 and methanol dips below 0.59, decrease sulphates by 0.03
    if((amanitaMushrooms < 0.67 || sarin < 0.34) || (alcohol < 0.38 && methanol < 0.59))
    {
        sulphates -= 0.03;
    }
//	- If lead goes above 0.36 and formaldehyde dips below 0.46, whilst at the same time, strychnine goes above 0.57 or ricin goes above 0.48, increase sulphates by 0.02
    if((lead > 0.36 && formaldehyde < 0.46) && (strychnine > 0.57 || ricin > 0.48))
    {
        sulphates += 0.02;
    }
//	- When formaldehyde goes above 0.75 or sarin goes above 0.35, whilst at the same time, methanol dips below 0.31 and lead goes above 0.48, reduce antibodies by 0.02
    if((formaldehyde > 0.75|| sarin > 0.35) && (methanol < 0.31 && lead > 0.48))
    {
        antibodies -= 0.02;
    }
//	- When alcohol dips below 0.68, amanitaMushrooms dips below 0.49, and also strychnine goes above 0.4, increment antibodies by 0.03
    if(alcohol < 0.68 && amanitaMushrooms < 0.49 && strychnine > 0.4)
    {
        antibodies += 0.03;
    }
//	- If sarin goes above 0.67 and ricin dips below 0.44, or on the other hand, formaldehyde dips below 0.39, decrease aspirin by 0.05
    if((sarin> 0.67 && ricin < 0.44) || (formaldehyde < 0.39))
    {
        aspirin -= 0.05;
    }
//	- When alcohol goes above 0.71 or lead dips below 0.5, or on the other hand, strychnine goes above 0.73 and amanitaMushrooms goes above 0.66, increment aspirin by 0.04
    if((alcohol > 0.71 || lead < 0.5) || (strychnine > 0.73 && amanitaMushrooms > 0.66))
    {
        aspirin += 0.04;
    }
//	- If alcohol goes above 0.31 or strychnine goes above 0.32, whilst at the same time, amanitaMushrooms dips below 0.73 or lead dips below 0.59, decrement glucagon by 0.03
    if((alcohol > 0.31 || strychnine > 0.32) && (amanitaMushrooms < 0.73 || lead < 0.59))
    {
        glucagon -= 0.03;
    }
//	- When sarin dips below 0.46, ricin goes above 0.46, and also methanol dips below 0.53, increment glucagon by 0.05
    if(sarin < 0.46 && ricin > 0.46 && methanol < 0.53)
    {
        glucagon += 0.05;
    }
//	- If alcohol goes above 0.32 and sarin goes above 0.49, whilst at the same time, strychnine dips below 0.52 or lead goes above 0.4, decrement paracetamol by 0.01
    if((alcohol > 0.32 && sarin > 0.49) && (strychnine < 0.52 || lead > 0.4))
    {
        paracetamol -= 0.01;
    }
//	- If amanitaMushrooms goes above 0.72, whilst at the same time, formaldehyde goes above 0.64 or ricin dips below 0.47, increment paracetamol by 0.05
    if((amanitaMushrooms > 0.72) && (formaldehyde > 0.64 || ricin < 0.47))
    {
        paracetamol += 0.05;
    }


	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	methanol = nextValue(graphs[0],methanol);
	strychnine = nextValue(graphs[1],strychnine);
	ricin = nextValue(graphs[2],ricin);
	alcohol = nextValue(graphs[3],alcohol);
	amanitaMushrooms = nextValue(graphs[4],amanitaMushrooms);
	lead = nextValue(graphs[5],lead);
	sarin = nextValue(graphs[6],sarin);
	formaldehyde = nextValue(graphs[7],formaldehyde);


	sulphates = constrain(sulphates, 0, 1);
	antibodies = constrain(antibodies, 0, 1);
	aspirin = constrain(aspirin, 0, 1);
	glucagon = constrain(glucagon, 0, 1);
	paracetamol = constrain(paracetamol, 0, 1);


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
	text('methanol: ' + nf(methanol,1,2), 20,20);
	fill(colors[1]);
	text('strychnine: ' + nf(strychnine,1,2), 20,40);
	fill(colors[2]);
	text('ricin: ' + nf(ricin,1,2), 20,60);
	fill(colors[3]);
	text('alcohol: ' + nf(alcohol,1,2), 20,80);
	fill(colors[4]);
	text('amanitaMushrooms: ' + nf(amanitaMushrooms,1,2), 20,100);
	fill(colors[5]);
	text('lead: ' + nf(lead,1,2), 20,120);
	fill(colors[6]);
	text('sarin: ' + nf(sarin,1,2), 20,140);
	fill(colors[7]);
	text('formaldehyde: ' + nf(formaldehyde,1,2), 20,160);


	//draw the antidotes bar chart
	drawBar(sulphates,50,'sulphates');
	drawBar(antibodies,200,'antibodies');
	drawBar(aspirin,350,'aspirin');
	drawBar(glucagon,500,'glucagon');
	drawBar(paracetamol,650,'paracetamol');


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
