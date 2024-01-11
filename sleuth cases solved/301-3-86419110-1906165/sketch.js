/*
The case of the Python Syndicate
Stage 4

Officer: tchow004
CaseNum: 301-3-86419110-1906165

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

Organise each syndicate member into an object. I’ve done one for you as an example.
Be sure to replicate the naming conventions for your own objects.
Use image command together with the objects you created to organise the mugshots.

- Once you have done this you can comment out or delete the old variables.

*/

var photoBoard;
//var cecil_karpinski_image;
//var robbie_kray_image;
//var rocky_kray_image;
//var anna_karpinski_image;
//var countess_hamilton_image;
//var lina_lovelace_image;

//var countess_hamilton_obj;
//var cecil_karpinski_obj;
//var robbie_kray_obj;
//var rocky_kray_obj;
//var anna_karpinski_obj;
//var lina_lovelace_obj;

//declare your new objects below


//var cecil_karpinski_x_location = 115;
//var cecil_karpinski_y_location = 40;
//var robbie_kray_x_location = 408;
//var robbie_kray_y_location = 40;
//var rocky_kray_x_location = 701;
//var rocky_kray_y_location = 40;
//var anna_karpinski_x_location = 115;
//var anna_karpinski_y_location = 309;
//var lina_lovelace_x_location = 701;
//var lina_lovelace_y_location = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	cecil_karpinski_image = loadImage("karpinskiBros1.png");
	robbie_kray_image = loadImage("krayBrothers2.png");
	rocky_kray_image = loadImage("krayBrothers1.png");
	anna_karpinski_image = loadImage("karpinskiWoman.png");
	countess_hamilton_image = loadImage("countessHamilton.png");
	lina_lovelace_image = loadImage("lina.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	countess_hamilton_obj = {
		x: 408,
		y: 309,
		image: countess_hamilton_image
	};
    cecil_karpinski_obj = {
        x:115,
        y: 40,
        image: cecil_karpinski_image
    };
    robbie_kray_obj = {
        x: 408,
        y:40,
        image: robbie_kray_image
    };
    rocky_kray_obj = {
        x: 701,
        y: 40,
        image: rocky_kray_image
    };
    anna_karpinski_obj = {
        x: 115,
        y: 309,
        image: anna_karpinski_image
    };
    lina_lovelace_obj = {
        x: 701,
        y: 309,
        image: lina_lovelace_image
    };


	//define your new objects below
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(cecil_karpinski_obj.image, cecil_karpinski_obj.x, cecil_karpinski_obj.y);
	
    image(robbie_kray_obj.image, robbie_kray_obj.x, robbie_kray_obj.y);
	
    image(rocky_kray_obj.image, rocky_kray_obj.x, rocky_kray_obj.y);
    
	image(anna_karpinski_obj.image, anna_karpinski_obj.x, anna_karpinski_obj.y);
	
    image(countess_hamilton_obj.image, countess_hamilton_obj.x, countess_hamilton_obj.y);
	
    image(lina_lovelace_obj.image, lina_lovelace_obj.x, lina_lovelace_obj.y);


}