/*

Officer: tchow004
CaseNum: 403-1-54006722-1906165

Case 403 - Stake out - stage 2

I've gotten hold of a hot tip that Shiffman is hiding out at Jerry's Wine Bar.
We've alerted the local precinct but they cannot act unless they know for certain that he's within 74 meters (pixels) of the spot.

Whenever Shiffman (signified by the mouse) is within 74 pixels of Jerry's Wine Bar - draw a Orchid ellipse with a radius of 74 around it.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  ellipse()
  dist()
  mouseX
  mouseY

*/

var img;

function preload()
{
	img = loadImage('map.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
}

function draw()
{
    // draw the image
    image(img,0,0);

    //Write your code below here ...
    if (dist(mouseX, mouseY,1741,641)<74)
        {
            fill(218,112,214);
            ellipse(1741,641,148,148);
        }


    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);
}
