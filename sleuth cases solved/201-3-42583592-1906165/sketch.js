/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: tchow004
CaseNum: 201-3-42583592-1906165

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...

You should need around 20 vertices to draw round the judge and make sure you close your shape!


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

    // write the code to draw around the Judge's body below
    beginShape();
    vertex(370,280);
    vertex(384,377);
    vertex(462,380);
    vertex(472,404);
    vertex(588,375);
    vertex(649,381);
    vertex(651,436);
    vertex(736,470);
    vertex(736,434);
    vertex(680,421);
    vertex(793,315);
    vertex(692,153);
    vertex(742,84);
    vertex(700,68);
    vertex(662,153);
    vertex(673,263);
    vertex(422,264);
    vertex(370,280);
    endShape();
}
