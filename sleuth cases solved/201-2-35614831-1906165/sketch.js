/*
201 - The case of Judge Hopper
Stage 3 - The dressing room

Officer: tchow004
CaseNum: 201-2-35614831-1906165

No sooner do you enter the lobby of the Cobol Theatre than the sound of gunshots leads you running towards the backstage area. You head towards a swinging door, the star dressing room. Sure enough you find a series of bullet holes peppered across the mirror. You are about to turn round and resume your chase when you notice a familiar pattern in the holes. Frantically you grab some lipstick from the dresser and draw on the mirror.

Use the vertex function to complete the pattern.


*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to join the bullet holes below
    beginShape(POINTS);
    vertex(301, 118);
    vertex(313, 174);
    vertex(370, 135);
    vertex(448, 75);
    vertex(471, 160);
    vertex(538, 100);
    endShape();
}
