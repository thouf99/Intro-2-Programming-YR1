/*
Officer: tchow004
CaseNum: 601-0-88921636-1906165

Case 601 - Escaped - stage 1

We've got an emergency here. The notorious killer Casey Fry has escaped from the Federal Correctional Institution.
She is on the loose and we have been asked to track her movements.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, Orange fill ellipses at each location.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

For this mission you will need ONLY the following:

- for loop
- fill
- ellipse()


*/

var countyMap;

//Sightings of Casey Fry.

var FrySightings_coordinate_x = [127, 156, 179, 200, 220, 228, 249, 269, 292, 321, 354, 390, 396, 429, 456, 467, 483, 531, 547, 571, 589, 637];
var FrySightings_coordinate_y = [175, 158, 192, 154, 133, 168, 149, 139, 168, 133, 159, 144, 225, 228, 230, 277, 267, 291, 278, 274, 318, 280];


function preload()
{
	countyMap = loadImage("map.png")
}

function setup()
{
  createCanvas(countyMap.width, countyMap.height);

	image(countyMap, 0,0);

	//add your code below here
    noStroke();
    fill(255,165,0);
    for(var i = 0; i < FrySightings_coordinate_x.length; i++)
    {
        ellipse(FrySightings_coordinate_x[i], FrySightings_coordinate_y[i], 5);
    }

}

//We are not using the draw function this time
