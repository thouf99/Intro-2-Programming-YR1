/*

Officer: tchow004
CaseNum: 403-3-91050719-1906165

Case 403 - Captured - stage 4

A coordinated action is under way to arrest Shiffman. Police are currently in pursuit on Huffman Street.
In order to catch him we must be able to alert all forces of his whereabouts according to the following rules:

- if Shiffman is within 107 meters from Colossal Cave Arcade then alert local police by drawing a Sienna circle around it with a radius of 107 pixels.
- if Shiffman is in City Narrows then the neighbourhood watch must be notified by drawing a MediumVioletRed rectangle around it.
- if Shiffman is in neither position, a global alert must be issued by drawing a SeaGreen rectangle covering the area between Reynolds Street, Bereners-Lee Street, Huffman Street and Adele Street.

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
//    - if Shiffman is within 107 meters from Colossal Cave Arcade then alert local police by drawing a Sienna circle around it with a radius of 107 pixels.
    if (dist(mouseX,mouseY, 356,854)<107)
    {
        fill(160,82,45);
        ellipse(356,854,214,214);
    }
//    if Shiffman is in City Narrows then the neighbourhood watch must be notified by drawing a MediumVioletRed rectangle around it.
    else if (mouseX >2106 && mouseY > 166 && mouseX < 2241 && mouseY <294)
    {
        fill(199,21,133);
        rect(2106,166,135,130);
    }
//    - if Shiffman is in neither position, a global alert must be issued by drawing a SeaGreen rectangle covering the area between Reynolds Street, Bereners-Lee Street, Huffman Street and Adele Street.
    else //(mouseX >1127 && mouseX < 1501 && mouseY >123 && mouseY < 561)
    {
        fill(46,139,87);
        rect(1127,123,374,438);
    }
    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);
}
