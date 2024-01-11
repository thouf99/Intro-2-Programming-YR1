/*

Officer: tchow004
CaseNum: 502-3-29074414-1906165

Case 502 - A donation - stage 4

This final document will seal the deal kid. C’mon kid. Let’s send these crooks down.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + array[index].property[index] + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var A_Listing = [
{
	Redacted_0: {Part_0: "start", Part_1: "consider", Part_2: "fence", Part_3: "smile"}, 
	Redacted_1: {Part_0: "fence", Part_1: "fence", Part_2: "sail", Part_3: "rejoice"}, 
	Redacted_2: {Part_0: "mend", Part_1: "sneeze", Part_2: "sneeze", Part_3: "mend"}
},
{
	Redacted_0: {Part_0: "succeed", Part_1: "start", Part_2: "bake", Part_3: "protect"}, 
	Redacted_1: {Part_0: "start", Part_1: "tug", Part_2: "smile", Part_3: "tug"}, 
	Redacted_2: {Part_0: "radiate", Part_1: "hurry", Part_2: "protect", Part_3: "clip"}
},
{
	Redacted_0: {Part_0: "plug", Part_1: "tug", Part_2: "plug", Part_3: "hurry"}, 
	Redacted_1: {Part_0: "clip", Part_1: "tug", Part_2: "hurry", Part_3: "rejoice"}, 
	Redacted_2: {Part_0: "start", Part_1: "consider", Part_2: "charge", Part_3: "protect"}
},
{
	Redacted_0: {Part_0: "start", Part_1: "charge", Part_2: "sail", Part_3: "stuff"}, 
	Redacted_1: {Part_0: "succeed", Part_1: "stuff", Part_2: "bake", Part_3: "tug"}, 
	Redacted_2: {Part_0: "mend", Part_1: "Governor Zuckerberg", Part_2: "mend", Part_3: "play"}
},
{
	Redacted_0: {Part_0: "radiate", Part_1: "stuff", Part_2: "development", Part_3: "protect"}, 
	Redacted_1: {Part_0: "succeed", Part_1: "sneeze", Part_2: "you", Part_3: "fence"}, 
	Redacted_2: {Part_0: "COBOL", Part_1: "sneeze", Part_2: "hurry", Part_3: "stuff"}
}];

var B_Listing = [
{
	Redacted_0: {Part_0: "consider", Part_1: "bake", Part_2: "sail", Part_3: "smile"}, 
	Redacted_1: {Part_0: "tug", Part_1: "sail", Part_2: "protect", Part_3: "charge"}, 
	Redacted_2: {Part_0: "bake", Part_1: "smile", Part_2: "rejoice", Part_3: "sneeze"}
},
{
	Redacted_0: {Part_0: "radiate", Part_1: "consider", Part_2: "smile", Part_3: "fence"}, 
	Redacted_1: {Part_0: "Edsger", Part_1: "play", Part_2: "$200,000", Part_3: "plug"}, 
	Redacted_2: {Part_0: "meddle", Part_1: "bake", Part_2: "plug", Part_3: "radiate"}
},
{
	Redacted_0: {Part_0: "play", Part_1: "charge", Part_2: "ALGOL fish wholesalers", Part_3: "smile"}, 
	Redacted_1: {Part_0: "sail", Part_1: "start", Part_2: "stuff", Part_3: "stuff"}, 
	Redacted_2: {Part_0: "mend", Part_1: "hurry", Part_2: "protect", Part_3: "sneeze"}
},
{
	Redacted_0: {Part_0: "succeed", Part_1: "fence", Part_2: "protect", Part_3: "syndicate"}, 
	Redacted_1: {Part_0: "mend", Part_1: "sail", Part_2: "sneeze", Part_3: "play"}, 
	Redacted_2: {Part_0: "sneeze", Part_1: "radiate", Part_2: "bake", Part_3: "play"}
},
{
	Redacted_0: {Part_0: "clip", Part_1: "sail", Part_2: "stuff", Part_3: "mend"}, 
	Redacted_1: {Part_0: "sneeze", Part_1: "donation", Part_2: "tug", Part_3: "sneeze"}, 
	Redacted_2: {Part_0: "hurry", Part_1: "protect", Part_2: "plug", Part_3: "ALGOL"}
}];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280, 800);

  // replace all redacted words with the correct values from the data structures above

  missingWords = "Edsger, donation, $200,000, ALGOL, you, ALGOL fish wholesalers, syndicate, development, COBOL, Governor Zuckerberg";

  redactedText = "My dearest " + B_Listing[1].Redacted_1.Part_0 + ", I have just received your very generous " + B_Listing[4].Redacted_1.Part_1 + " of " + B_Listing[1].Redacted_1.Part_2 + ". Thank you. This will be invaluable to our campaign. " + B_Listing[4].Redacted_2.Part_3 + " is a stalwart part of the community and I look forward to continuing our strong partnership in the future. Regard the other matter, I think you will find that all has been satisfactorily dealt with. Just read this morning’s front pages. You can rest assured that no mention was made of " + A_Listing[4].Redacted_1.Part_2 + " or " + B_Listing[2].Redacted_0.Part_2 + " to the " + B_Listing[3].Redacted_0.Part_3 + ". Your new " + A_Listing[4].Redacted_0.Part_2 + " at the " + A_Listing[4].Redacted_2.Part_0 + " can now proceed without impediment. Yours sincerely, " + A_Listing[3].Redacted_2.Part_1 + "";

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
