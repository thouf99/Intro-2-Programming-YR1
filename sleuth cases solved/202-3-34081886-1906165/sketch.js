/*

Officer: tchow004
CaseNum: 202-3-34081886-1906165

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Dark Orchid filled text with a Orange outline in Diggity font.
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(601,476);
	textSize(30);
}

function draw()
{
	background(255);

	fill(0,128,128);
	stroke(34,139,34);
	textFont(RonsFont);
    // text("If", 207,189);
	fill(100,149,237);
	stroke(127,255,0);
	textFont(Ballpointprint);
    // text("?", 109,255);
	// text("the", 268,255);
	fill(65,105,225);
	stroke(0,0,255);
	textFont(Diggity);
	// text("relationship", 19,125);
	push();
	fill(205,133,63);
	stroke(255,165,0);
	textFont(Melissa);
	// text("out.", 458,158);
	pop();
	stroke(139,0,0);
	textFont(Melissa);
	// text("send", 352,189);
	fill(148,0,211);
	stroke(220,20,60);
	// text("yours,", 111,315);
	fill(144,238,144);
	stroke(107,142,35);
	textFont(RonsFont);
	// text("ney", 139,189);
	fill(0,255,0);
	stroke(0,0,139);
	textFont(Melissa);
	// text("so,", 247,189);
	push();
	fill(75,0,130);
	stroke(34,139,34);
	textFont(RonsFont);
	// text("delays.", 404,90);
	pop();
	stroke(178,34,34);
	// text("gua", 7,222);
	fill(0,0,139);
	stroke(0,255,255);
	textFont(Ballpointprint);
	// text("and", 285,158);
	fill(107,142,35);
	stroke(34,139,34);
	textFont(Melissa);
	// text("secrets,", 190,255);
	fill(255,140,0);
	stroke(32,178,170);
	textFont(Diggity);
	// text("x", 77,375);
	push();
	fill(0,250,154);
	stroke(160,82,45);
	textFont(RonsFont);
	// text("I'm", 177,222);
	pop();
	fill(0,255,0);
	stroke(255,255,0);
	textFont(Melissa);
	// text("you", 248,125);
	fill(25,25,112);
	stroke(255,69,0);
	textFont(Ballpointprint);
	// text("You", 451,189);
	push();
	fill(173,216,230);
	stroke(0,255,0);
	textFont(RonsFont);
	// text("me", 383,125);
	pop();
	fill(148,0,211);
	stroke(218,165,32);
	textFont(Diggity);
	// text("can", 44,90);
	fill(0,128,0);
	stroke(0,206,209);
	textFont(RonsFont);
	// text("?", 428,125);
	fill(205,133,63);
	stroke(178,34,34);
	textFont(Diggity);
	// text("how", 327,222);
	fill(148,0,211);
	stroke(128,0,0);
	textFont(Ballpointprint);
	// text("I", 506,222);
	fill(222,184,135);
	stroke(34,139,34);
	textFont(Melissa);
	// text("Are", 211,125);
	push();
	fill(148,0,211);
	stroke(107,142,35);
	textFont(Diggity);
	// text("?", 184,189);
	pop();
	stroke(128,0,128);
	textFont(Ballpointprint);
	// text("sure", 268,222);
	fill(0,0,139);
	stroke(255,165,0);
	textFont(Melissa);
	// text("not", 233,222);
	fill(30,144,255);
	stroke(139,0,139);
	textFont(Ballpointprint);
	// text("I", 280,189);
	push();
	fill(178,34,34);
	stroke(0,0,139);
	// text("we", 534,125);
	pop();
	fill(127,255,212);
	stroke(0,128,0);
	textFont(Diggity);
	// text("a", 207,158);
	fill(0,0,128);
	stroke(220,20,60);
	textFont(Ballpointprint);
	// text("more", 441,222);
	fill(255,0,0);
	stroke(0,206,209);
	textFont(Melissa);
	// text("you", 543,158);
	fill(135,206,250);
	stroke(128,128,0);
	textFont(Ballpointprint);
	// text("avoiding", 282,125);
	fill(0,255,255);
	stroke(75,0,130);
	textFont(Melissa);
	// text("should", 9,158);
	fill(186,85,211);
	stroke(210,105,30);
	textFont(Diggity);
	// text("The", 143,255);
	fill(107,142,35);
	stroke(128,128,0);
	textFont(Melissa);
	// text("take", 64,255);
	push();
	fill(100,149,237);
	stroke(184,134,11);
	textFont(Ballpointprint);
	// text("My", 17,30);
	pop();
	fill(153,50,204);
	stroke(255,165,0);
	textFont(Diggity);
	 text("for", 163,158);
	 text("cash", 397,189);
	 text("ignore", 178,90);
	fill(72,209,204);
	stroke(0,0,128);
	textFont(Ballpointprint);
	// text("much", 378,222);
	fill(255,0,255);
	stroke(124,252,0);
	textFont(Melissa);
	// text("onger", 125,90);
	fill(0,0,205);
	stroke(0,191,255);
	// text("rded", 34,222);
	fill(238,130,238);
	stroke(255,255,0);
	textFont(Diggity);
	// text("Is", 489,90);
	fill(127,255,212);
	stroke(128,0,0);
	textFont(Ballpointprint);
	// text("I", 7,90);
	push();
	fill(0,255,127);
	stroke(0,255,127);
	textFont(Melissa);
	// text("sometimes.", 76,222);
	pop();
	fill(154,205,50);
	textFont(Diggity);
	// text("all", 429,158);
	fill(255,165,0);
	stroke(153,50,204);
	textFont(Ballpointprint);
	// text("continual", 309,90);
	fill(50,205,50);
	stroke(0,0,205);
	textFont(RonsFont);
	// text("mo", 104,189);
	push();
	fill(0,206,209);
	stroke(154,205,50);
	textFont(Melissa);
	// text("our", 513,90);
	pop();
	fill(123,104,238);
	stroke(255,0,255);
	textFont(Melissa);
	// text("l", 122,90);
	push();
	stroke(255,165,0);
	textFont(RonsFont);
	// text("?", 189,125);
	pop();
	fill(210,105,30);
	stroke(255,165,0);
	// text("sort", 338,158);
	fill(173,255,47);
	textFont(Ballpointprint);
	// text("of", 63,189);
	fill(147,112,219);
	stroke(139,0,0);
	textFont(Melissa);
	// text("sho", 9,189);
	fill(240,230,140);
	stroke(148,0,211);
	textFont(RonsFont);
	// text("can", 12,255);
	fill(255,69,0);
	stroke(124,252,0);
	textFont(Diggity);
	// text("Are", 494,158);
	fill(124,252,0);
	stroke(75,0,130);
	// text("no", 89,90);
	fill(160,82,45);
	stroke(255,0,255);
	textFont(RonsFont);
	// text("Forever", 11,315);
	fill(139,0,0);
	stroke(107,142,35);
	// text("silence.", 322,255);
	push();
	fill(148,0,211);
	stroke(0,100,0);
	textFont(Diggity);
	// text("Perhaps", 450,125);
	pop();
	fill(153,50,204);
	stroke(255,165,0);
	textFont(Diggity);
	 text("safe", 133,125);
	fill(148,0,211);
	stroke(184,134,11);
	textFont(Melissa);
	// text("break", 232,158);
	fill(184,134,11);
	stroke(0,0,139);
	textFont(Diggity);
	// text("these", 244,90);
	fill(147,112,219);
	stroke(0,0,128);
	textFont(Melissa);
	// text("are", 503,189);
	fill(0,0,139);
	stroke(0,255,255);
	textFont(Diggity);
	// text("so", 537,189);
	fill(106,90,205);
	stroke(0,255,255);
	// text("this", 383,158);
	fill(0,255,127);
	stroke(34,139,34);
	textFont(Melissa);
	// text("rt", 39,189);
	push();
	fill(0,255,255);
	stroke(0,191,255);
	// text("Bob,", 125,30);
	pop();
	fill(178,34,34);
	stroke(0,255,255);
	textFont(Ballpointprint);
	// text("away", 97,158);
	fill(124,252,0);
	stroke(75,0,130);
	textFont(Melissa);
	// text("can", 317,189);
	fill(153,50,204);
	stroke(255,165,0);
	textFont(Diggity);
	 text("go", 65,158);
	fill(0,0,128);
	stroke(46,139,87);
	textFont(RonsFont);
	// text("Daisy", 7,375);
	push();
	fill(219,112,147);
	stroke(165,42,42);
	textFont(Melissa);
	// text("darling", 65,30);
	pop();



}
