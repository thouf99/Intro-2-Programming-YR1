/*

Officer: tchow004
CaseNum: 401-3-36944748-1906165

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final
stand he has set up his own cupcake shop. The laced cupcakes look delicious but
they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have
to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- If Amanita_Mushrooms goes above 0.68 and Nerve_Gas dips below 0.38, whilst at the same time, methanol dips below 0.37 or alcohol goes above 0.45, reduce glucagon by 0.03
	- When chlorine goes above 0.39 and cyanide goes above 0.74, whilst at the same time, polonium dips below 0.7 or deadly_nightshade dips below 0.4, try increasing glucagon by 0.05
	- When chlorine goes above 0.51, or on the other hand, polonium goes above 0.69 and Nerve_Gas goes above 0.3, try decreasing protamine by 0.04
	- If alcohol goes above 0.53 and cyanide goes above 0.71, or on the other hand, methanol dips below 0.37 and deadly_nightshade goes above 0.36, increment protamine by 0.02
	- When alcohol goes above 0.54 or deadly_nightshade dips below 0.38, whilst at the same time, Nerve_Gas goes above 0.59, decrease plasma by 0.01
	- When either chlorine dips below 0.7, cyanide goes above 0.54, or perhaps polonium dips below 0.68, increment plasma by 0.05
	- When cyanide goes above 0.5 and methanol dips below 0.49, whilst at the same time, Nerve_Gas goes above 0.36 or alcohol dips below 0.36, try decreasing opioids by 0.01
	- When polonium dips below 0.28 and Amanita_Mushrooms dips below 0.71, or on the other hand, chlorine dips below 0.52, increment opioids by 0.02
	- When Nerve_Gas dips below 0.32, methanol dips below 0.26, and also Amanita_Mushrooms dips below 0.45, reduce beta_blocker by 0.01
	- When alcohol goes above 0.36 or cyanide goes above 0.69, or on the other hand, polonium dips below 0.52 and chlorine goes above 0.31, raise beta_blocker by 0.02


Your conditional statements should:

consider the following poisons:

	- Amanita_Mushrooms
	- deadly_nightshade
	- chlorine
	- Nerve_Gas
	- polonium
	- methanol
	- alcohol
	- cyanide


and modify the following antidotes:

	- glucagon
	- protamine
	- plasma
	- opioids
	- beta_blocker


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var Amanita_Mushrooms;
var deadly_nightshade;
var chlorine;
var Nerve_Gas;
var polonium;
var methanol;
var alcohol;
var cyanide;


//Declare the antidote variables
var glucagon;
var protamine;
var plasma;
var opioids;
var beta_blocker;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	Amanita_Mushrooms = 0.5;
	deadly_nightshade = 0.5;
	chlorine = 0.5;
	Nerve_Gas = 0.5;
	polonium = 0.5;
	methanol = 0.5;
	alcohol = 0.5;
	cyanide = 0.5;
	glucagon = 0.5;
	protamine = 0.5;
	plasma = 0.5;
	opioids = 0.5;
	beta_blocker = 0.5;


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
//	- If Amanita_Mushrooms goes above 0.68 and Nerve_Gas dips below 0.38, whilst at the same time, methanol dips below 0.37 or alcohol goes above 0.45, reduce glucagon by 0.03
    if((Amanita_Mushrooms > 0.68 && Nerve_Gas < 0.38) && (methanol < 0.37 || alcohol > 0.45))
    {
        glucagon -= 0.03;
    }
//	- When chlorine goes above 0.39 and cyanide goes above 0.74, whilst at the same time, polonium dips below 0.7 or deadly_nightshade dips below 0.4, try increasing glucagon by 0.05
    if((chlorine > 0.39 && cyanide > 0.74) && (polonium < 0.7 || deadly_nightshade < 0.4))
    {
        glucagon += 0.05;
    }
//	- When chlorine goes above 0.51, or on the other hand, polonium goes above 0.69 and Nerve_Gas goes above 0.3, try decreasing protamine by 0.04
    if(chlorine > 0.51 || (polonium > 0.69 && Nerve_Gas > 0.3))
    {
        protamine -= 0.04;
    }
//	- If alcohol goes above 0.53 and cyanide goes above 0.71, or on the other hand, methanol dips below 0.37 and deadly_nightshade goes above 0.36, increment protamine by 0.02
    if((alcohol > 0.53 && cyanide > 0.71) || (methanol < 0.37 && deadly_nightshade > 0.36))
    {
        protamine += 0.02;
    }
//	- When alcohol goes above 0.54 or deadly_nightshade dips below 0.38, whilst at the same time, Nerve_Gas goes above 0.59, decrease plasma by 0.01
    if((alcohol > 0.54 || deadly_nightshade < 0.38) && Nerve_Gas > 0.59)
    {
        plasma -= 0.01;
    }
//	- When either chlorine dips below 0.7, cyanide goes above 0.54, or perhaps polonium dips below 0.68, increment plasma by 0.05
    if(chlorine < 0.7 || cyanide > 0.54 || polonium < 0.68)
    {
        plasma +=0.05;
    }
//	- When cyanide goes above 0.5 and methanol dips below 0.49, whilst at the same time, Nerve_Gas goes above 0.36 or alcohol dips below 0.36, try decreasing opioids by 0.01
    if((cyanide > 0.5 && methanol < 0.49) && (Nerve_Gas > 0.36 || alcohol < 0.36))
    {
        opioids -= 0.01;
    }
//	- When polonium dips below 0.28 and Amanita_Mushrooms dips below 0.71, or on the other hand, chlorine dips below 0.52, increment opioids by 0.02
    if((polonium < 0.28 && Amanita_Mushrooms < 0.71) || chlorine < 0.52)
    {
        opioids += 0.02;
    }
//	- When Nerve_Gas dips below 0.32, methanol dips below 0.26, and also Amanita_Mushrooms dips below 0.45, reduce beta_blocker by 0.01
    if(Nerve_Gas < 0.32 && methanol < 0.26 & Amanita_Mushrooms < 0.45)
    {
        beta_blocker -= 0.01;
    }
//	- When alcohol goes above 0.36 or cyanide goes above 0.69, or on the other hand, polonium dips below 0.52 and chlorine goes above 0.31, raise beta_blocker by 0.02
    if((alcohol > 0.36 || cyanide > 0.69) || (polonium < 0.52 && chlorine > 0.31))
    {
        beta_blocker += 0.02;
    }

	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	Amanita_Mushrooms = nextValue(graphs[0],Amanita_Mushrooms);
	deadly_nightshade = nextValue(graphs[1],deadly_nightshade);
	chlorine = nextValue(graphs[2],chlorine);
	Nerve_Gas = nextValue(graphs[3],Nerve_Gas);
	polonium = nextValue(graphs[4],polonium);
	methanol = nextValue(graphs[5],methanol);
	alcohol = nextValue(graphs[6],alcohol);
	cyanide = nextValue(graphs[7],cyanide);


	glucagon = constrain(glucagon, 0, 1);
	protamine = constrain(protamine, 0, 1);
	plasma = constrain(plasma, 0, 1);
	opioids = constrain(opioids, 0, 1);
	beta_blocker = constrain(beta_blocker, 0, 1);


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
	text('Amanita_Mushrooms: ' + nf(Amanita_Mushrooms,1,2), 20,20);
	fill(colors[1]);
	text('deadly_nightshade: ' + nf(deadly_nightshade,1,2), 20,40);
	fill(colors[2]);
	text('chlorine: ' + nf(chlorine,1,2), 20,60);
	fill(colors[3]);
	text('Nerve_Gas: ' + nf(Nerve_Gas,1,2), 20,80);
	fill(colors[4]);
	text('polonium: ' + nf(polonium,1,2), 20,100);
	fill(colors[5]);
	text('methanol: ' + nf(methanol,1,2), 20,120);
	fill(colors[6]);
	text('alcohol: ' + nf(alcohol,1,2), 20,140);
	fill(colors[7]);
	text('cyanide: ' + nf(cyanide,1,2), 20,160);


	//draw the antidotes bar chart
	drawBar(glucagon,50,'glucagon');
	drawBar(protamine,200,'protamine');
	drawBar(plasma,350,'plasma');
	drawBar(opioids,500,'opioids');
	drawBar(beta_blocker,650,'beta_blocker');


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
