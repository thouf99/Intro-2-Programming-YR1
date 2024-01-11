/*

Officer: tchow004
CaseNum: 403-3-94663381-1906165

Case 403 - Captured - stage 4

A coordinated action is under way to arrest Shiffman. Police are currently in pursuit on Huffman Street.
In order to catch him we must be able to alert all forces of his whereabouts according to the following rules:

- if Shiffman is within 82 meters from Torvald's House then alert local police by drawing a MediumSpringGreen circle around it with a radius of 82 pixels.
- if Shiffman is in Gates Department Store then the neighbourhood watch must be notified by drawing a RoyalBlue rectangle around it.
- if Shiffman is in neither position, a global alert must be issued by drawing a Sienna rectangle covering the area between Reynolds Street, Turing Place, Huffman Street and Mullenweg Street.

Shiffman's position is signified by the mouse.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  rect()
  ellipse()
  dist()

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
    if (dist(mouseX,mouseY, 412,151)<82)
    {
        fill(0, 250, 154);
        ellipse(412,151,164,164);
    }
 else if (mouseX >1922 && mouseY > 340 && mouseX < 2066 && mouseY < 409)
    {
        fill(65,105,225);
        rect(1922,340,149,75);
    }
else //(mouseX >1127 && mouseX < 1501 && mouseY >123 && mouseY < 561)
    {
        fill(160,82,45);
        rect(369,529,823,438);
    }

    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);
}
