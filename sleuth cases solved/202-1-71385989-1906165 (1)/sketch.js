/*

Officer: tchow004
CaseNum: 202-1-71385989-1906165

Case 202 - The case of Bob and Daisy - stage 2

Here’s another letter kid. This time it’s from Daisy (aka. Woz).
Decode it to uncover more about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Medium Turquoise filled text with a Purple outline.
Only comment out text commands - leave fill & stroke commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Melissa.otf');
}

function setup()
{
	createCanvas(590,686);
	textFont(letterFont);
	textSize(32);
}

function draw()
{
	background(255);

     fill(0,255,127);
    stroke(0,0,128);
//	text("you", 212,310);
     fill(173,216,230);
    stroke(218,165,32);
//	text("it", 277,168);
     fill(0,255,127);
    stroke(139,69,19);
//	text("at", 275,239);
     fill(255,255,0);
    stroke(210,105,30);
//	text("When", 10,96);
     fill(218,165,32);
    stroke(255,165,0);
//	text("I", 114,239);
     fill(238,130,238);
    stroke(218,165,32);
//	text("night", 381,239);
     fill(0,128,128);
    stroke(255,0,255);
//	text("we", 403,168);
	fill(72,209,204);
	stroke(128,0,128);
	text("up", 225,239);
	text("bank", 13,128);
     fill(255,165,0);
    stroke(160,82,45);
//	text("hout", 178,414);
     fill(0,0,139);
    stroke(107,142,35);
//	text("on", 151,128);
     fill(0,0,255);
    stroke(184,134,11);
//	text("you.", 380,272);
     fill(0,191,255);
    stroke(218,165,32);
//	text("I", 153,205);
     fill(135,206,235);
    stroke(0,255,255);
//	text("my", 373,414);
     fill(152,251,152);
    stroke(0,255,0);
//	text("How", 14,345);
     fill(127,255,212);
    stroke(255,0,255);
//	text("wit", 130,414);
     fill(255,99,71);
    stroke(25,25,112);
//	text("will", 112,96);
     fill(0,255,255);
    stroke(0,139,139);
//	text("have", 374,345);
     fill(65,105,225);
    stroke(128,0,128);
//	text("only", 261,272);
     fill(124,252,0);
    stroke(0,0,255);
//	text("feels", 266,447);
     fill(75,0,130);
    stroke(0,0,205);
//	text("I", 355,345);
     fill(154,205,50);
    stroke(139,69,19);
//	text("be", 231,96);
     fill(153,50,204);
    stroke(255,0,255);
//	text("side,", 433,414);
     fill(0,0,128);
    stroke(0,0,255);
//	text("darling", 65,32);
     fill(184,134,11);
    stroke(210,105,30);
//	text("in", 415,379);
     fill(0,0,128);
    stroke(255,255,0);
//	text("you", 373,205);
     fill(244,164,96);
    stroke(165,42,42);
//	text("this", 102,379);
     fill(32,178,170);
    stroke(153,50,204);
//	text("Bob,", 186,32);
     fill(255,0,255);
    stroke(0,0,128);
//	text("Daisy", 10,575);
     fill(0,255,127);
    stroke(25,25,112);
//	text("I", 539,272);
     fill(138,43,226);
    stroke(0,0,255);
//	text("around", 281,310);
     fill(72,209,204);
    stroke(255,0,255);
//	text("you", 261,414);
     fill(0,0,139);
    stroke(255,0,0);
//	text("Even", 326,379);
     fill(50,205,50);
    stroke(0,100,0);
//	text("small", 81,447);
     fill(139,69,19);
    stroke(0,139,139);
//	text("spring,", 11,414);
     fill(128,128,0);
    stroke(32,178,170);
//	text("of", 339,272);
     fill(244,164,96);
    stroke(220,20,60);
//	text("long", 172,205);
     fill(219,112,147);
    stroke(32,178,170);
//	text("How", 485,128);
     fill(0,128,128);
    stroke(139,69,19);
//	text("urn.", 413,128);
     fill(64,224,208);
    stroke(255,0,255);
//	text("?", 492,96);
     fill(244,164,96);
    stroke(0,139,139);
//	text("ret", 368,128);
     fill(75,0,130);
    stroke(128,0,128);
//	text("many", 10,168);
     fill(160,82,45);
    stroke(0,250,154);
//	text("?", 299,379);
     fill(100,149,237);
    stroke(0,255,0);
//	text("the", 318,239);
     fill(0,0,139);
    stroke(46,139,87);
//	text("I'm", 519,96);
     fill(0,255,255);
//	text("desolate.", 353,447);
     fill(218,165,32);
    stroke(165,42,42);
//	text("can", 102,272);
     fill(220,20,60);
    stroke(218,165,32);
//	text("this", 12,447);
     fill(240,128,128);
    stroke(210,105,30);
//	text("last", 459,168);
     fill(135,206,235);
    stroke(154,205,50);
//	text("yours,", 141,511);
     fill(0,0,205);
    stroke(0,100,0);
//	text("stare", 133,239);
     fill(25,25,112);
    stroke(153,50,204);
//	text("sky,", 473,239);
     fill(238,232,170);
    stroke(178,34,34);
//	text("?", 126,205);
     fill(128,0,128);
    stroke(218,165,32);
//	text("store", 10,379);
     fill(0,0,128);
    stroke(160,82,45);
//	text("the", 454,379);
     fill(0,100,0);
    stroke(0,128,0);
//	text("sed", 59,205);
     fill(135,206,235);
    stroke(32,178,170);
//	text("I", 83,272);
     fill(186,85,211);
    stroke(0,255,0);
//	text("to", 463,345);
     fill(0,250,154);
    stroke(34,139,34);
//	text("the", 403,310);
     fill(32,178,170);
    stroke(139,0,139);
//	text("think", 170,272);
     fill(186,85,211);
    stroke(34,139,34);
//	text("to", 251,205);
     fill(178,34,34);
    stroke(178,34,34);
//	text("since", 309,168);
     fill(0,255,255);
    stroke(32,178,170);
//	text("arms.", 14,239);
     fill(144,238,144);
    stroke(184,134,11);
//	text("longing", 171,379);
     fill(255,105,180);
    stroke(255,0,255);
//	text("having", 94,310);
     fill(0,0,205);
    stroke(128,0,0);
//	text("in", 442,205);
     fill(210,105,30);
    stroke(0,139,139);
//	text("x", 110,575);
     fill(255,255,0);
    stroke(107,142,35);
//	text("and", 13,272);
     fill(65,105,225);
    stroke(210,105,30);
//	text("How", 459,272);
	fill(72,209,204);
	stroke(128,0,128);
	text("place", 466,310);
	text("united", 281,96);
	text("is", 241,168);
	text("hold", 294,205);
     fill(0,0,255);
    stroke(128,128,0);
//	text("kis", 14,205);
     fill(0,206,209);
    stroke(139,0,0);
//	text("we", 175,96);
     fill(222,184,135);
    stroke(0,255,255);
//	text("My", 8,32);
     fill(255,255,0);
    stroke(0,250,154);
//	text("at", 330,414);
     fill(139,0,139);
    stroke(0,206,209);
//	text("much", 94,345);
     fill(0,206,209);
    stroke(139,0,139);
//	text("again", 393,96);
     fill(210,105,30);
    stroke(128,128,0);
//	text("ing", 92,128);
     fill(255,255,0);
    stroke(0,0,139);
//	text("do", 305,345);
     fill(210,105,30);
    stroke(128,128,0);
//	text("your", 201,128);
     fill(0,206,209);
    stroke(0,0,139);
//	text("town", 177,447);
     fill(127,255,0);
    stroke(128,128,0);
//	text("miss", 10,310);
     fill(139,0,139);
    stroke(255,140,0);
//	text("swift", 283,128);
     fill(205,133,63);
//	text("months", 110,168);
     fill(107,142,35);
    stroke(128,128,0);
//	text("longer", 193,345);
     fill(255,215,0);
    stroke(46,139,87);
//	text("my", 481,205);
     fill(107,142,35);
    stroke(148,0,211);
//	text("Forever", 10,511);



}
