/*
The case of the Python Syndicate
Stage 1

Officer: tchow004
CaseNum: 301-0-89333628-1906165

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Find coordinates for the mugshot and initialise your variable with these
values.
- Replace the hard-coded constants in the corresponding image command so that
the mugshot appears in its designated position.

*/

var photoBoard;
var lina_lovelace_img;
var cecil_karpinski_img;
var anna_karpinski_img;
var pawel_karpinski_img;
var bones_karpinski_img;
var rocky_kray_img;



//declare your new variables below
var cecil_karpinski_pos_x = 408;
var cecil_karpinski_pos_y = 40;
var lina_lovelace_pos_x= 115;
var lina_lovelace_pos_y= 40;
var anna_karpinski_pos_x= 701;
var anna_karpinski_pos_y= 40;
var pawel_karpinski_pos_x= 115;
var pawel_karpinski_pos_y= 309;
var bones_karpinski_pos_x= 408;
var bones_karpinski_pos_y= 309;
var rocky_kray_pos_x= 701;
var rocky_kray_pos_y= 309;

function preload()
{
	photoBoard = loadImage('photoBoard.png');
	lina_lovelace_img = loadImage("lina.png");
	cecil_karpinski_img = loadImage("karpinskiBros1.png");
	anna_karpinski_img = loadImage("karpinskiWoman.png");
	pawel_karpinski_img = loadImage("karpinskiBros2.png");
	bones_karpinski_img = loadImage("karpinskiDog.png");
	rocky_kray_img = loadImage("krayBrothers1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(cecil_karpinski_img, cecil_karpinski_pos_x, cecil_karpinski_pos_y);

	//image(lina_lovelace_img, 115, 40);
    image(lina_lovelace_img,lina_lovelace_pos_x, lina_lovelace_pos_y);
	//image(anna_karpinski_img, 701, 40);
    image(anna_karpinski_img, anna_karpinski_pos_x, anna_karpinski_pos_y);
	//image(pawel_karpinski_img, 115, 309);
    image(pawel_karpinski_img,pawel_karpinski_pos_x,pawel_karpinski_pos_y);
	//image(bones_karpinski_img, 408, 309);
    image(bones_karpinski_img,bones_karpinski_pos_x,bones_karpinski_pos_y);
	//image(rocky_kray_img, 701, 309);
    image(rocky_kray_img,rocky_kray_pos_x,rocky_kray_pos_y);

}