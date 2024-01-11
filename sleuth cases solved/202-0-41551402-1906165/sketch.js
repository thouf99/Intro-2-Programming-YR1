/*

Officer: tchow004
CaseNum: 202-0-41551402-1906165

Case 202 - The case of Bob and Daisy - stage 1

That pair of notorious criminals Woz and Jobs are up to no good again.
I’ve intercepted letters sent between them. It seems that they are
communicating through an ingenious code in which they masquerade as
besotted lovers, Daisy and Bob. I need you crack their code and determine
the details of their next heist so that we can catch them in the act.

Discover the hidden code by commenting out all text commands except
those which produce Deep Sky Blue text. Only comment out text commands.
Leave fill commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Ballpointprint.ttf');
}

function setup()
{
	createCanvas(616,798);
	textFont(letterFont);
	textSize(34);
}

function draw()
{
	background(255);

   fill(107,142,35);
//	text("It", 368,374);
   fill(218,112,214);
//	text("the", 107,102);
   fill(123,104,238);
//	text("be", 346,484);
   fill(100,149,237);
//	text("nny", 54,263);
   fill(176,224,230);
//	text("those", 16,180);
   fill(173,216,230);
//	text("think", 278,340);
   fill(210,105,30);
//	text("mom", 251,102);
//	text("I", 228,484);
//	text("eyes.", 266,374);
   fill(233,150,122);
//	text("that", 405,102);
//	text("bl", 339,449);
   fill(210,105,30);
//	text("Love", 11,632);
   fill(34,139,34);
//	text("voice", 102,449);
   fill(139,69,19);
//	text("lovely", 79,34);
//	text("alone", 77,415);
   fill(186,85,211);
//	text("q", 291,415);
   fill(25,25,112);
//	text("true", 154,222);
   fill(34,139,34);
//	text("of", 375,340);
   fill(64,224,208);
//	text("ses,", 225,632);
   fill(0,255,0);
//	text("only", 195,340);
//	text("like", 203,449);
   fill(165,42,42);
//	text("my", 464,222);
//	text("am", 478,524);
//	text("your", 419,340);
   fill(255,0,255);
//	text("I", 544,374);
//	text("my", 15,222);
   fill(50,205,50);
//	text("Oh", 19,34);
   fill(0,255,255);
//	text("fi", 174,102);
   fill(30,144,255);
//	text("luckiest", 15,524);
   fill(139,0,139);
//	text("the", 224,415);
//	text("I", 485,102);
   fill(127,255,0);
//	text("I", 306,139);
   fill(106,90,205);
//	text("I", 414,263);
   fill(0,0,139);
//	text("you", 426,180);
   fill(0,128,0);
//	text("?", 206,299);
//	text("Ever", 235,299);
//	text("I", 469,415);
   fill(106,90,205);
//	text("uiet", 313,415);
   fill(72,209,204);
//	text("x", 88,700);
   fill(154,205,50);
//	text("the", 60,484);
//	text("must", 249,484);
   fill(75,0,130);
//	text("and", 102,632);
//	text("s", 317,180);
//	text("saw", 506,102);
   fill(255,140,0);
//	text("make", 435,263);
   fill(0,100,0);
//	text("I", 457,524);
   fill(199,21,133);
//	text("Daisy,", 190,34);
   fill(173,255,47);
//	text("confession", 12,299);
   fill(147,112,219);
//	text("when", 440,374);
   fill(255,105,180);
//	text("are", 398,222);
   fill(0,0,128);
//	text("kis", 178,632);
   fill(32,178,170);
//	text("hear", 490,415);
//	text("your", 14,449);
   fill(153,50,204);
//	text("from", 429,139);
   fill(218,165,32);
//	text("lovely", 100,139);
   fill(154,205,50);
//	text("one", 79,222);
   fill(160,82,45);
//	text("few", 122,180);
   fill(0,0,205);
//	text("essed", 370,449);
   fill(0,128,0);
//	text("green", 156,374);
   fill(255,165,0);
//	text("I", 101,340);
   fill(128,0,128);
//	text("su", 14,263);
//	text("your", 12,139);
//	text("rst", 195,102);
   fill(222,184,135);
//	text("alive", 286,524);
   fill(165,42,42);
//	text("May", 333,263);
   fill(148,0,211);
//	text("last", 490,299);
   fill(218,112,214);
//	text("harp.", 127,484);
   fill(138,43,226);
//	text("were", 500,180);
   fill(127,255,212);
//	text("can", 122,340);
//	text("that", 346,180);
	fill(0,191,255);
	text("day", 129,263);
   fill(0,139,139);
//	text("darling,", 15,374);
	fill(0,191,255);
	text("a", 529,263);
   fill(178,34,34);
//	text("face,", 211,139);
//	text("your", 14,564);
//	text("Bob", 11,700);
   fill(255,0,255);
//	text("love.", 235,222);
   fill(128,0,0);
//	text("that", 389,415);
   fill(0,0,205);
//	text("person", 157,524);
   fill(255,127,80);
//	text("the", 272,449);
   fill(255,99,71);
//	text("the", 400,484);
   fill(0,206,209);
//	text("From", 11,102);
//	text("ent", 338,102);
//	text("of", 16,484);
   fill(255,215,0);
//	text("You", 328,222);
   fill(173,216,230);
//	text("am", 12,415);
   fill(0,206,209);
//	text("our", 422,299);
   fill(219,112,147);
//	text("that", 377,524);
	fill(0,191,255);
	text("chosen", 102,564);
	text("April", 245,263);
	text("date", 13,340);
   fill(199,21,133);
//	text("music", 481,449);
	fill(0,191,255);
	text("in", 203,263);
   fill(219,112,147);
//	text("knew", 327,139);
	fill(0,191,255);
	text("is", 402,374);
	text("second", 194,180);
   fill(0,255,255);
//	text("in", 182,415);
   fill(0,250,154);
//	text("since", 322,299);



}
