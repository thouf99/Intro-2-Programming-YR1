/*

Officer: tchow004
CaseNum: 502-1-32093911-1906165

Case 502 - A delicate matter - stage 2

We’re hot on the trail kid, and another document has come my way.
It’s a little more tricky to decipher but I know you can do it.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + Array[index].property + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var APaper = [
	{element0: "romantic", element1: "bake", element2: "meddle"}, 
	{element0: "tug", element1: "rejoice", element2: "hurry"}, 
	{element0: "COBOL", element1: "stuff", element2: "sail"}, 
	{element0: "clip", element1: "Edsger", element2: "consider"}, 
	{element0: "charge", element1: "bake", element2: "fence"}, 
	{element0: "charge", element1: "hurry", element2: "charge"}, 
	{element0: "sail", element1: "plug", element2: "smile"}, 
	{element0: "hurry", element1: "Hopper’s", element2: "capital"}, 
	{element0: "syndicate", element1: "meddle", element2: "charge"}, 
	{element0: "delicate", element1: "clip", element2: "rejoice"}
];

var BPaper = [
	{element0: "play", element1: "fence", element2: "tug"}, 
	{element0: "clip", element1: "smile", element2: "protect"}, 
	{element0: "hurry", element1: "tug", element2: "plug"}, 
	{element0: "start", element1: "a donation", element2: "hurry"}, 
	{element0: "sneeze", element1: "charge", element2: "start"}, 
	{element0: "clip", element1: "start", element2: "mend"}, 
	{element0: "charge", element1: "mend", element2: "radiate"}, 
	{element0: "radiate", element1: "fence", element2: "mend"}, 
	{element0: "smile", element1: "Governor Zuckerberg", element2: "smile"}, 
	{element0: "sail", element1: "start", element2: "she has"}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280,800);

  // replace all redacted words with the correct values from the data structures above

  missingWords = "Edsger, Hopper’s, she has, romantic, COBOL, syndicate, delicate, capital, a donation, Governor Zuckerberg";

  redactedText = "My dearest "+ APaper[3].element1 +", Please don’t doubt my sincerity when I say that I hadn’t the faintest idea about " + APaper[7].element1 +" intervention. I suspect that " + BPaper[9].element2 +" a " + APaper[0].element0 + " interest at the " + APaper[2].element0 + ". I and the " + APaper[8].element0 + " appreciate your many contributions over the years. However, this is a most " + APaper[9].element0 + " matter which would require significant " + APaper[7].element2 + " for me to deal with it satisfactorily. I would not be so crude as to suggest a sum but perhaps " + BPaper[3].element1 +" to my forthcoming campaign would help. Yours sincerely, " + BPaper[8].element1 + " ";

}

function draw()
{
  // you don't need to change this
  image(backgroundImg, 0, 0);
  stroke(0);
  strokeWeight(3);
  line(width/2, 10, width/2, height - 10);
  noStroke();
  textFont(myFont);
  textSize(14);
  text(redactedText, 30, 100, 580, 600);
  text(missingWords, 670, 100, 580, 600);
}
