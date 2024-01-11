/*

Officer: tchow004
CaseNum: 403-0-55949811-1906165

Case 403 - Surveillance - stage 1

We are on the lookout for the criminal mastermind known as Shiffman.
Our sources tell us that they are currently heading west on Ada Avenue.
I need you to sound the alarm if he crosses Packard Avenue.

Shiffman's position is signified by the mouse. To sound the alarm - draw a MediumTurquoise rectangle covering the entire map from Packard Avenue to the west.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  rect()
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
    if (mouseX < 1537)
    {
        fill(72,209,204);
        rect(0,0,1537, img.height);
    }


    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);
}
