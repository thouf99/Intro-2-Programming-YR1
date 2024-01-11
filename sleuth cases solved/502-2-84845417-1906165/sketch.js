/*

Officer: tchow004
CaseNum: 502-2-84845417-1906165

Case 502 - Out of the picture - stage 3

Yet another document has come my way. This one is even more tricky to decipher.
The Governor must really have something to hide.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + object.property[index] + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var APaper = {
	Element0: [ "start", "Edsger", "tug"], 
	Element1: [ "consider", "meddle", "start"], 
	Element2: [ "a donation", "tug", "sneeze"], 
	Element3: [ "charge", "start", "plug"], 
	Element4: [ "sail", "play", "succeed"], 
	Element5: [ "smile", "mend", "sneeze"], 
	Element6: [ "consider", "ALGOL", "syndicate"], 
	Element7: [ "protect", "stuff", "consider"], 
	Element8: [ "sneeze", "succeed", "smile"], 
	Element9: [ "radiate", "succeed", "clip"]
};

var BPaper = {
	Element0: [ "start", "charge", "succeed"], 
	Element1: [ "Governor Zuckerberg", "charge", "meddle"], 
	Element2: [ "consider", "campaign", "meddle"], 
	Element3: [ "sail", "$200,000", "clip"], 
	Element4: [ "Hopper", "consider", "stuff"], 
	Element5: [ "sneeze", "fence", "sneeze"], 
	Element6: [ "rejoice", "stuff", "sneeze"], 
	Element7: [ "play", "mend", "hurry"], 
	Element8: [ "mend", "plug", "consider"], 
	Element9: [ "hit", "hurry", "clip"]
};

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

  missingWords = "Governor Zuckerberg, a donation, campaign, $200,000, Hopper, syndicate, hit, ALGOL, Edsger";

  redactedText = "Dear " + BPaper.Element1[0] + ", I am sure that something could be worked out in terms of " + APaper.Element2[0] +" for your " + BPaper.Element2[1] + ". How does " + BPaper.Element3[1] + " sound ? I am afraid I will need to be so crude as to spell out what ALGOL requires in return. " + BPaper.Element4[0] + " needs to be out of the picture. She’s caused enough trouble. Get the " + APaper.Element6[2] + " to organise the " + BPaper.Element9[0] + " but I’d prefer it you don’t mention me or " + APaper.Element6[1] + ". I owe them enough favours already. Your old friend, " + APaper.Element0[1] + "";

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
