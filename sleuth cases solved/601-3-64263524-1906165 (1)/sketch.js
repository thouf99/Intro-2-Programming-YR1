/*
Officer: tchow004
CaseNum: 601-3-64263524-1906165

Case 601 - Narrowing in - stage 4

Casey Fry is on a killing spree and we still haven’t caught her.
We need a more sophisticated approach.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, MediumVioletRed stroke rectangles centered over each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, YellowGreen stroke triangles centered over each location.

This time we will catch Fry by comparing both distance from the crimes and dates of sightings.
If she was within less than 78 pixels of any of the crimes within no more than 2 days of their occurrence then the details
should be pushed to the list of possible matches with the following format.

{ crime:{x: 0, y:0, victimName: "John Doe"}, suspect:{x: 0, y:0} }

Note that the possible matches are already being drawn.
Your job is to fill the array with the correct data.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

For this mission you will need ONLY the following:

- for loop
- if()
- dist()
- abs()
- stroke
- rect() NB. Draw each rectangle with the point at its center.

- stroke
- triangle() NB. Draw each triangle with the point roughly at its center.


*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var Casey_Data = {
	coordinateX: [518, 486, 475, 376, 316, 265, 253, 240, 220, 178, 199, 146, 115, 67, 39, 68],
	coordinateY: [471, 508, 566, 554, 559, 614, 609, 604, 597, 600, 604, 582, 551, 495, 493, 461],
	date: [12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 17, 18, 20, 21, 22, 24],
};

//Recent crime records.

var Murderscene_Log = {
	Pos_X: [438, 408, 408, 642, 623, 95, 75, 269, 389, 484, 496, 546, 538, 702, 817],
	Pos_Y: [420, 451, 377, 289, 279, 488, 522, 597, 554, 549, 484, 463, 359, 412, 474],
	date: [11, 11, 13, 16, 16, 17, 18, 26, 28, 2, 9, 14, 12, 17, 18],
	Murdered_Name: ['PIERRE DORCEY', 'HANG NIEMELA', 'KITTY THAXTER', 'LIANNE COURTWOOD', 'TAMICA MAUBERT', 'BRIDGET BROADVIEW', 'NICOLE ASHELY', 'LAVERNE JACQUELIN', 'DEEDEE PHINNEY', 'JESSIA PORTOS', 'DRUSILLA WARMAN', 'JULIANA ADVERSANE', 'MAJORIE JENI', 'MALINDA GOODBURY', 'LOUISE ZETLAND'],
};

function preload()
{
	countyMap = loadImage("map.png")
}

function setup()
{
  createCanvas(countyMap.width, countyMap.height);

	image(countyMap, 0,0);

	//add your code below here
    for (var i= 0; i < Casey_Data.coordinateX.length; i++)
    {
        var Casey_Data_X = Casey_Data.coordinateX;
        var Casey_Data_Y = Casey_Data.coordinateY;
        var Casey_Data_D = Casey_Data.date;
        
        noFill();
        stroke(199,21,133);
        rect(Casey_Data_X[i] - 5, Casey_Data_Y[i] - 5, 10, 10);
    }
    
    for (var j = 0; j < Murderscene_Log.Pos_X.length; j++)
    {
        var Murderscene_Pos_X = Murderscene_Log.Pos_X;
        var Murderscene_Pos_Y = Murderscene_Log.Pos_Y;
        var Murderscene_Pos_M = Murderscene_Log.Murdered_Name;
        var Murderscene_Pos_F = Murderscene_Log.date;
        
        noFill();
        stroke(154,205,50);
        triangle(Murderscene_Pos_X[j], Murderscene_Pos_Y[j] + 7, Murderscene_Pos_X[j] - 7, Murderscene_Pos_Y[j] - 7, Murderscene_Pos_X[j] +7, Murderscene_Pos_Y[j] - 7);
        
            for (var t = 0; t < Casey_Data.coordinateX.length; t++)
            {
                if(     dist(Casey_Data.coordinateX[t], Casey_Data.coordinateY[t], Murderscene_Log.Pos_X[j], Murderscene_Log.Pos_Y[j]) <78 
                        && abs(Casey_Data.date[t] -  Murderscene_Log.date[j] < 2))
                    {
                        possibleMatches = possibleMatches.concat([{
                            crime: {
                                    x: Murderscene_Pos_X[j],
                                    y: Murderscene_Pos_Y[j],
                                    victimName: Murderscene_Pos_M[j],
                                    date: Murderscene_Pos_F[j]
                            },
                            suspect: {
                                    x: Casey_Data.coordinateX[t],
                                    y: Casey_Data.coordinateY[t]
                            }
                        }])
                    }
            }
    }
        console.log(possibleMatches);
    
    
	// code to draw the matches ( if any)
	for(let i = 0 ; i < possibleMatches.length ; i++)
	{
		stroke(127);
		strokeWeight(3);
		line(possibleMatches[i].crime.x, possibleMatches[i].crime.y, possibleMatches[i].suspect.x, possibleMatches[i].suspect.y);

		noStroke();
		fill(127);
		text(possibleMatches[i].crime.victimName, possibleMatches[i].crime.x + 15, possibleMatches[i].crime.y + 15);
	}
}

//We are not using the draw function this time
