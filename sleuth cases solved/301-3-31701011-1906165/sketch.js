/*
The case of the Python Syndicate
Stage 4

Officer: tchow004
CaseNum: 301-3-31701011-1906165

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

Organise each syndicate member into an object. I’ve done one for you as an example.
Be sure to replicate the naming conventions for your own objects.
Use image command together with the objects you created to organise the mugshots.

- Once you have done this you can comment out or delete the old variables.

*/

var photoBoard;
var cecil_karpinski_image;
var anna_karpinski_image;
var countess_hamilton_image;
var bones_karpinski_image;
var pawel_karpinski_image;
var robbie_kray_image;

var bones_karpinski_obj;

//declare your new objects below
var cecil_karpinski_obj;
var anna_karpinski_obj;
var countess_hamilton_obj;
var pawel_karpinski_obj;
var robbie_kray_obj;

var cecil_karpinski_loc_x = 115;
var cecil_karpinski_loc_y = 40;
var anna_karpinski_loc_x = 408;
var anna_karpinski_loc_y = 40;
var countess_hamilton_loc_x = 701;
var countess_hamilton_loc_y = 40;
var pawel_karpinski_loc_x = 408;
var pawel_karpinski_loc_y = 309;
var robbie_kray_loc_x = 701;
var robbie_kray_loc_y = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	cecil_karpinski_image = loadImage("karpinskiBros1.png");
	anna_karpinski_image = loadImage("karpinskiWoman.png");
	countess_hamilton_image = loadImage("countessHamilton.png");
	bones_karpinski_image = loadImage("karpinskiDog.png");
	pawel_karpinski_image = loadImage("karpinskiBros2.png");
	robbie_kray_image = loadImage("krayBrothers2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	bones_karpinski_obj = {
		x: 115,
		y: 309,
		image: bones_karpinski_image
	};



	//define your new objects below
    cecil_karpinski_obj = {
        x: cecil_karpinski_loc_x,
        y: cecil_karpinski_loc_y,
        image: cecil_karpinski_image
    };
    anna_karpinski_obj = {
        x: anna_karpinski_loc_x,
        y: anna_karpinski_loc_y,
        image: anna_karpinski_image
    };
    countess_hamilton_obj = {
        x: countess_hamilton_loc_x,
        y: countess_hamilton_loc_y,
        image: countess_hamilton_image
    };
    pawel_karpinski_obj = {
        x: pawel_karpinski_loc_x,
        y: pawel_karpinski_loc_y,
        image: pawel_karpinski_image
    };
    robbie_kray_obj = {
        x: robbie_kray_loc_x,
        y: robbie_kray_loc_y,
        image: robbie_kray_image
    };
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(cecil_karpinski_obj.image, cecil_karpinski_obj.x, cecil_karpinski_obj.y);
	image(anna_karpinski_obj.image, anna_karpinski_obj.x, anna_karpinski_obj.y);
	image(countess_hamilton_obj.image, countess_hamilton_obj.x, countess_hamilton_obj.y);
	image(bones_karpinski_obj.image, bones_karpinski_obj.x, bones_karpinski_obj.y);
	image(pawel_karpinski_obj.image, pawel_karpinski_obj.x, pawel_karpinski_obj.y);
	image(robbie_kray_obj.image, robbie_kray_obj.x, robbie_kray_obj.y);


}