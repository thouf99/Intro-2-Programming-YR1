/*

Officer: tchow004
CaseNum: 101-3-93386338-1906165

Case 101 - The Case of Anna Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Anna’s style. Now’s our chance to find out the root of all
of this. Lets see who is Anna meeting.

Identify Anna by drawing a Dark Orange filled rectangle with a Sandy Brown outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Medium Slate Blue filled
rectangle with a Dark Cyan outline around him.

Identify the man reading the newspaper by drawing a Dark Cyan filled rectangle
with a Teal outline around him.

Identify the woman with the dog by drawing a Midnight Blue filled rectangle with a
Cyan outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
	stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
    fill(255,140,0,100);
    strokeWeight(4);
    stroke(244,164,96,100);
    rect(396,254,165,335);
    
    fill(123,104,238,100);
    strokeWeight(4);
    stroke(0,139,139);
    rect(1330,449,270,372);
    
    fill(0,139,139,100);
    strokeWeight(4);
    stroke(0,128,128);
    rect(167,208,82,148);
    
    fill(25,25,112,100);
    strokeWeight(4);
    stroke(0,255,255,100);
    rect(1,236,105,226);
    

}
