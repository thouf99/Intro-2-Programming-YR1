/*

Officer: tchow004
CaseNum: 401-3-21352438-1906165

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final
stand he has set up his own cupcake shop. The laced cupcakes look delicious but
they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have
to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When mercury dips below 0.69 or sarin dips below 0.4, whilst at the same time, snakeVenom dips below 0.65, try decreasing antivenom by 0.04
	- If polonium goes above 0.49, insecticide goes above 0.45, and also hemlock goes above 0.71, increase antivenom by 0.01
	- When sarin goes above 0.4 or mercury goes above 0.26, whilst at the same time, polonium dips below 0.66 or hemlock dips below 0.53, try decreasing antibodies by 0.05
	- If insecticide goes above 0.73 and snakeVenom goes above 0.42, or on the other hand, warfarin dips below 0.37 and ricin dips below 0.26, increment antibodies by 0.03
	- If either sarin dips below 0.3, polonium dips below 0.58, or perhaps warfarin goes above 0.31, decrease ethanol by 0.03
	- If ricin dips below 0.59 or snakeVenom goes above 0.28, whilst at the same time, mercury goes above 0.35, try increasing ethanol by 0.02
	- If either ricin goes above 0.71, insecticide dips below 0.53, mercury goes above 0.3, or perhaps sarin goes above 0.38, decrement plasma by 0.02
	- When snakeVenom dips below 0.27 or hemlock goes above 0.58, whilst at the same time, warfarin goes above 0.36 and polonium dips below 0.55, try increasing plasma by 0.03
	- When snakeVenom goes above 0.67, or on the other hand, polonium goes above 0.32 and ricin dips below 0.57, decrement sodiumBicarbonate by 0.05
	- If hemlock goes above 0.71 and sarin goes above 0.68, or on the other hand, insecticide dips below 0.49 or warfarin goes above 0.25, raise sodiumBicarbonate by 0.02


Your conditional statements should:

consider the following poisons:

	- ricin
	- insecticide
	- warfarin
	- hemlock
	- polonium
	- sarin
	- snakeVenom
	- mercury


and modify the following antidotes:

	- antivenom
	- antibodies
	- ethanol
	- plasma
	- sodiumBicarbonate


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var ricin;
var insecticide;
var warfarin;
var hemlock;
var polonium;
var sarin;
var snakeVenom;
var mercury;


//Declare the antidote variables
var antivenom;
var antibodies;
var ethanol;
var plasma;
var sodiumBicarbonate;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	ricin = 0.5;
	insecticide = 0.5;
	warfarin = 0.5;
	hemlock = 0.5;
	polonium = 0.5;
	sarin = 0.5;
	snakeVenom = 0.5;
	mercury = 0.5;
	antivenom = 0.5;
	antibodies = 0.5;
	ethanol = 0.5;
	plasma = 0.5;
	sodiumBicarbonate = 0.5;


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
//    - When mercury dips below 0.69 or sarin dips below 0.4, whilst at the same time, snakeVenom dips below 0.65, try decreasing antivenom by 0.04
    if((mercury<0.69 || sarin <0.4) && snakeVenom < 0.65)
    {
        antivenom -= 0.04;
    }
//	- If polonium goes above 0.49, insecticide goes above 0.45, and also hemlock goes above 0.71, increase antivenom by 0.01
    if(polonium>0.49 && insecticide> 0.45 && hemlock>0.71)
    {
        antivenom +=0.01;
    }
//	- When sarin goes above 0.4 or mercury goes above 0.26, whilst at the same time, polonium dips below 0.66 or hemlock dips below 0.53, try decreasing antibodies by 0.05
    if((sarin>0.4 || mercury>0.26)&& (polonium <0.66 || hemlock<0.53))
    {
        antibodies -= 0.05;
    }
//	- If insecticide goes above 0.73 and snakeVenom goes above 0.42, or on the other hand, warfarin dips below 0.37 and ricin dips below 0.26, increment antibodies by 0.03
    if(insecticide > 0.73 && snakeVenom > 0.42 || (warfarin< 0.37 && ricin<0.26))
    {
        antibodies +=0.03;
    }
//	- If either sarin dips below 0.3, polonium dips below 0.58, or perhaps warfarin goes above 0.31, decrease ethanol by 0.03
    if(sarin < 0.3 || polonium<0.58 || warfarin> 0.31)
    {
        ethanol -=0.03;
    }
//	- If ricin dips below 0.59 or snakeVenom goes above 0.28, whilst at the same time, mercury goes above 0.35, try increasing ethanol by 0.02
    if(ricin<0.59 || snakeVenom>0.28 && mercury>0.35)
    {
        ethanol += 0.02;
    }
//	- If either ricin goes above 0.71, insecticide dips below 0.53, mercury goes above 0.3, or perhaps sarin goes above 0.38, decrement plasma by 0.02
    if(ricin> 0.71 || insecticide<0.53 || mercury>0.3 || sarin>0.38)
    {
        plasma -= 0.02;
    }
//	- When snakeVenom dips below 0.27 or hemlock goes above 0.58, whilst at the same time, warfarin goes above 0.36 and polonium dips below 0.55, try increasing plasma by 0.03
    if(snakeVenom<0.27 || hemlock>0.58 && warfarin>0.36 && polonium<0.55)
    {
        plasma += 0.03;
    }
//	- When snakeVenom goes above 0.67, or on the other hand, polonium goes above 0.32 and ricin dips below 0.57, decrement sodiumBicarbonate by 0.05
    if(snakeVenom > 0.67 ||(polonium>0.32 && ricin< 0.57))
    {
        sodiumBicarbonate -= 0.05;
    }
//	- If hemlock goes above 0.71 and sarin goes above 0.68, or on the other hand, insecticide dips below 0.49 or warfarin goes above 0.25, raise sodiumBicarbonate by 0.02
    if(hemlock>0.71 && sarin>0.68 || (insecticide<0.49 || warfarin> 0.25))
    {
        sodiumBicarbonate+= 0.02;
    }



	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	ricin = nextValue(graphs[0],ricin);
	insecticide = nextValue(graphs[1],insecticide);
	warfarin = nextValue(graphs[2],warfarin);
	hemlock = nextValue(graphs[3],hemlock);
	polonium = nextValue(graphs[4],polonium);
	sarin = nextValue(graphs[5],sarin);
	snakeVenom = nextValue(graphs[6],snakeVenom);
	mercury = nextValue(graphs[7],mercury);


	antivenom = constrain(antivenom, 0, 1);
	antibodies = constrain(antibodies, 0, 1);
	ethanol = constrain(ethanol, 0, 1);
	plasma = constrain(plasma, 0, 1);
	sodiumBicarbonate = constrain(sodiumBicarbonate, 0, 1);


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
	text('ricin: ' + nf(ricin,1,2), 20,20);
	fill(colors[1]);
	text('insecticide: ' + nf(insecticide,1,2), 20,40);
	fill(colors[2]);
	text('warfarin: ' + nf(warfarin,1,2), 20,60);
	fill(colors[3]);
	text('hemlock: ' + nf(hemlock,1,2), 20,80);
	fill(colors[4]);
	text('polonium: ' + nf(polonium,1,2), 20,100);
	fill(colors[5]);
	text('sarin: ' + nf(sarin,1,2), 20,120);
	fill(colors[6]);
	text('snakeVenom: ' + nf(snakeVenom,1,2), 20,140);
	fill(colors[7]);
	text('mercury: ' + nf(mercury,1,2), 20,160);


	//draw the antidotes bar chart
	drawBar(antivenom,50,'antivenom');
	drawBar(antibodies,200,'antibodies');
	drawBar(ethanol,350,'ethanol');
	drawBar(plasma,500,'plasma');
	drawBar(sodiumBicarbonate,650,'sodiumBicarbonate');


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
