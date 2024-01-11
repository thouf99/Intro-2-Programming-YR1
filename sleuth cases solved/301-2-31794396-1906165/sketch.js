/*
The case of the Python Syndicate
Stage 3


Officer: tchow004
CaseNum: 301-2-31794396-1906165

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Robbie kray has been declared and initialised
- Modify the x and y parameters of each image command using the x and y
properties from the Robbie kray object so the images remain at their correct
positions on the board.
- To do this you will need to combine add and subtract operators with the
relevant property for each parameter



*/

var photoBoard;
var pawel_karpinski_image;
var robbie_kray_image;
var countess_hamilton_image;
var anna_karpinski_image;
var rocky_kray_image;
var bones_karpinski_image;

var robbie_kray_obj;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	pawel_karpinski_image = loadImage("karpinskiBros2.png");
	robbie_kray_image = loadImage("krayBrothers2.png");
	countess_hamilton_image = loadImage("countessHamilton.png");
	anna_karpinski_image = loadImage("karpinskiWoman.png");
	rocky_kray_image = loadImage("krayBrothers1.png");
	bones_karpinski_image = loadImage("karpinskiDog.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	robbie_kray_obj = {
		x: 408,
		y: 40,
		image: robbie_kray_image
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(robbie_kray_obj.image, robbie_kray_obj.x, robbie_kray_obj.y);

	//image(pawel_karpinski_image, 115, 40);
    image(pawel_karpinski_image, robbie_kray_obj.x-293, robbie_kray_obj.y);
	//image(countess_hamilton_image, 701, 40);
    image(countess_hamilton_image, robbie_kray_obj.x+293, robbie_kray_obj.y);
	//image(anna_karpinski_image, 115, 309);
    image(anna_karpinski_image, robbie_kray_obj.x-293, robbie_kray_obj.y+269);
	//image(rocky_kray_image, 408, 309);
    image(rocky_kray_image, robbie_kray_obj.x, robbie_kray_obj.y+269);
	//image(bones_karpinski_image, 701, 309);
    image(bones_karpinski_image, robbie_kray_obj.x+293, robbie_kray_obj.y+269);

}