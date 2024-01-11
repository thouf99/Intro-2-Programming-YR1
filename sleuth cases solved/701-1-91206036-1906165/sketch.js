/*

Officer: tchow004
CaseNum: 701-1-91206036-1906165

Case 701 - Credible cat thief - stage 2

Kid they need you down at the precinct again.
This time it's a sneaky cat thief who has been absconding with the neighbourhoods felines for some time.
Luckily old Mrs Olivetti caught a glimpse of them as they disappeared over her back fence.
We’ve a bunch of likely characters lined-up but we need your brains to solve the mystery.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchProperties(suspectObj){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. I remember they had a dragon tattoo. I distinctly remember that they were wearing a orange socks, I remember thinking that was quite unusual. They wore red glasses. By the look of them they were younger than 53. It was very dark and I could barely see, They were quite big, they probably weigh more than 68 Kg. They were wearing a green jacket. I'm not quite sure. Can I go home now Sir? 

*/

var allSuspects = [
	{ 
		"name": "KITTY FORSLIN",
		"glasses": "cheap plastic",
		"tattoo": "big arrow",
		"item": "pair of leather trousers",
		"age": 36,
		"weight": 62
	},
	{ 
		"name": "NELSON MYRLE",
		"glasses": "blue",
		"tattoo": "bull",
		"item": "pink scarf",
		"age": 63,
		"weight": 92
	},
	{ 
		"name": "BRIDGET PEGORD",
		"glasses": "white",
		"tattoo": "sword",
		"item": "dotted necktie",
		"age": 72,
		"weight": 100
	},
	{ 
		"name": "NICOLE PORTOS",
		"glasses": "red",
		"tattoo": "dragon",
		"item": "orange socks",
		"age": 45,
		"weight": 71
	},
	{ 
		"name": "LAKESHA CROME",
		"glasses": "thin metallic",
		"tattoo": "chinese lettering",
		"item": "net weave shirt",
		"age": 62,
		"weight": 80
	}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
	createCanvas(640,480);
	textFont(myFont);
}

// Declare your function here
function matchProperties(suspectObj)
{
    if (suspectObj.tattoo == "dragon" && suspectObj.item == "orange socks" && suspectObj.glasses == "red" && suspectObj.age < 53 && suspectObj.weight > 68)
        return true;
        return false;
}
//I remember walking down the street and then I saw them. I remember they had a dragon tattoo. I distinctly remember that they were wearing a orange socks, I remember thinking that was quite unusual. They wore red glasses. By the look of them they were younger than 53. It was very dark and I could barely see, They were quite big, they probably weigh more than 68 Kg. They were wearing a green jacket. I'm not quite sure. Can I go home now Sir?
function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < allSuspects.length; i++){
    if(matchProperties(allSuspects[i]) == true){
      fill(255,0,0);
      text(allSuspects[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(allSuspects[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
