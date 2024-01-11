/*
Officer: tchow004
CaseNum: 601-1-42236220-1906165

Case 601 - Cross Reference - stage 2

Fry is still on the loose. We think she’s resorted to stealing to get by.
Hopefully we can track her down by cross-referencing sightings and recent thefts in the area.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, MediumSpringGreen stroke ellipses at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, Gold stroke rectangles centered over each location.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

For this mission you will need ONLY the following:

- for loop
- stroke
- ellipse()

- stroke
- rect() NB. Draw each rectangle with the point at its center.


*/

var countyMap;

//Sightings of Casey Fry.

var FugitiveSighted = [ 
  { posX : 639, posY : 288},
  { posX : 681, posY : 286},
  { posX : 712, posY : 293},
  { posX : 756, posY : 310},
  { posX : 715, posY : 368},
  { posX : 701, posY : 425},
  { posX : 753, posY : 436},
  { posX : 815, posY : 468},
  { posX : 795, posY : 506},
  { posX : 788, posY : 497},
  { posX : 781, posY : 486},
  { posX : 768, posY : 489},
  { posX : 750, posY : 500},
  { posX : 732, posY : 506},
  { posX : 714, posY : 514},
  { posX : 695, posY : 531},
  { posX : 693, posY : 552},
  { posX : 654, posY : 523},
  { posX : 624, posY : 500},
  { posX : 594, posY : 484},
  { posX : 555, posY : 474} 
];


//Recent crime records.

var CrimeRecorded = [ 
  { Pt_X : 403, Pt_Y : 401},
  { Pt_X : 402, Pt_Y : 360},
  { Pt_X : 427, Pt_Y : 403},
  { Pt_X : 646, Pt_Y : 284},
  { Pt_X : 639, Pt_Y : 264},
  { Pt_X : 830, Pt_Y : 434},
  { Pt_X : 809, Pt_Y : 443},
  { Pt_X : 844, Pt_Y : 496},
  { Pt_X : 802, Pt_Y : 350},
  { Pt_X : 683, Pt_Y : 413},
  { Pt_X : 552, Pt_Y : 464},
  { Pt_X : 629, Pt_Y : 498},
  { Pt_X : 712, Pt_Y : 562},
  { Pt_X : 783, Pt_Y : 603},
  { Pt_X : 415, Pt_Y : 225},
  { Pt_X : 561, Pt_Y : 282},
  { Pt_X : 562, Pt_Y : 392},
  { Pt_X : 751, Pt_Y : 283},
  { Pt_X : 680, Pt_Y : 359},
  { Pt_X : 626, Pt_Y : 436},
  { Pt_X : 701, Pt_Y : 455},
  { Pt_X : 838, Pt_Y : 565},
  { Pt_X : 322, Pt_Y : 508},
  { Pt_X : 468, Pt_Y : 556},
  { Pt_X : 625, Pt_Y : 737} 
];


function preload()
{
	countyMap = loadImage("map.png")
}

function setup()
{
  createCanvas(countyMap.width, countyMap.height);

	image(countyMap, 0,0);

	//add your code below here
    noFill();
    stroke(0, 250, 154);
    for(var i = 0; i < FugitiveSighted.length; i++)
    {
        ellipse(FugitiveSighted[i].posX, FugitiveSighted[i].posY, 10);
    }
    
    noFill();
    stroke(255,215,0);
    for(var j = 0; j < CrimeRecorded.length; j++)
    {
        rect(CrimeRecorded[j].Pt_X - 5, CrimeRecorded[j].Pt_Y - 5, 10,10);
    }

}

//We are not using the draw function this time
