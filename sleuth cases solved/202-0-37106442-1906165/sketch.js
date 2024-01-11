/*

Officer: tchow004
CaseNum: 202-0-37106442-1906165

Case 202 - The case of Bob and Daisy - stage 1

That pair of notorious criminals Woz and Jobs are up to no good again.
I’ve intercepted letters sent between them. It seems that they are
communicating through an ingenious code in which they masquerade as
besotted lovers, Daisy and Bob. I need you crack their code and determine
the details of their next heist so that we can catch them in the act.

Discover the hidden code by commenting out all text commands except
those which produce Blue text. Only comment out text commands.
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
	createCanvas(593,495);
	textFont(letterFont);
	textSize(25);
}

function draw()
{
	background(255);

   fill(100,149,237);
//	text("lov", 315,101);
   fill(0,0,128);
//	text("Ever", 519,162);
   fill(0,0,139);
//	text("gr", 111,214);
   fill(0,191,255);
//	text("when", 318,214);
   fill(135,206,250);
//	text("make", 267,162);
//	text("of", 194,272);
   fill(205,133,63);
//	text("?", 498,162);
   fill(255,0,0);
//	text("one", 11,162);
   fill(218,112,214);
//	text("the", 456,244);
   fill(199,21,133);
//	text("from", 12,130);
   fill(64,224,208);
//	text("day", 237,75);
   fill(0,0,205);
//	text("that", 316,130);
   fill(250,128,114);
//	text("ace,", 406,101);
   fill(139,69,19);
//	text("I", 180,101);
   fill(176,224,230);
//	text("that", 121,101);
   fill(222,184,135);
//	text("since", 11,187);
   fill(255,99,71);
//	text("x", 64,403);
   fill(255,0,255);
//	text("that", 272,303);
   fill(0,206,209);
//	text("I", 393,214);
   fill(173,216,230);
//	text("am", 346,303);
//	text("like", 406,244);
   fill(160,82,45);
//	text("knew", 481,101);
//	text("the", 455,75);
//	text("your", 393,303);
   fill(255,0,255);
//	text("confessi", 357,162);
//	text("eyes.", 191,214);
   fill(184,134,11);
//	text("harp.", 275,272);
   fill(128,0,128);
//	text("I", 348,272);
   fill(210,105,30);
//	text("on", 459,162);
   fill(124,252,0);
//	text("luckiest", 8,303);
//	text("of", 450,187);
   fill(34,139,34);
//	text("I", 466,101);
   fill(50,205,50);
//	text("Oh", 14,25);
   fill(30,144,255);
//	text("be", 434,272);
//	text("must", 363,272);
   fill(218,165,32);
//	text("your", 482,187);
   fill(75,0,130);
//	text("blessed", 9,272);
   fill(0,100,0);
//	text("I", 331,303);
   fill(128,0,128);
//	text("moment", 9,101);
   fill(127,255,212);
//	text("saw", 195,101);
//	text("ely", 352,101);
   fill(255,0,0);
//	text("darling,", 8,214);
   fill(152,251,152);
//	text("th", 379,187);
//	text("your", 268,244);
   fill(107,142,35);
//	text("quiet", 58,244);
//	text("in", 291,75);
   fill(138,43,226);
//	text("I", 189,244);
   fill(0,128,0);
//	text("those", 77,130);
   fill(184,134,11);
//	text("were", 429,130);
	fill(0,0,255);
	text("first", 504,75);
   fill(0,100,0);
//	text("am", 408,214);
   fill(139,69,19);
//	text("are", 59,75);
//	text("From", 387,75);
   fill(153,50,204);
//	text("You", 8,75);
   fill(0,139,139);
//	text("f", 397,101);
//	text("secon", 206,130);
   fill(127,255,0);
//	text("true", 65,162);
//	text("It", 265,214);
   fill(0,139,139);
//	text("last", 133,187);
   fill(148,0,211);
//	text("voice", 332,244);
   fill(255,69,0);
//	text("my", 496,130);
//	text("in", 531,214);
   fill(0,250,154);
//	text("you", 375,130);
   fill(0,128,128);
//	text("only", 318,187);
   fill(144,238,144);
//	text("ds", 279,130);
   fill(153,50,204);
//	text("our", 84,187);
//	text("my", 106,75);
   fill(218,112,214);
//	text("kisses,", 130,353);
   fill(75,0,130);
//	text("su", 153,75);
   fill(255,105,180);
//	text("your", 251,101);
   fill(0,255,255);
//	text("few", 154,130);
   fill(0,255,255);
//	text("can", 265,187);
	fill(0,0,255);
	text("date", 186,187);
	text("chosen", 457,303);
	text("is", 290,214);
   fill(135,206,235);
//	text("the", 226,272);
   fill(0,255,255);
//	text("I", 252,162);
   fill(219,112,147);
//	text("een", 137,214);
   fill(176,224,230);
//	text("May", 192,162);
//	text("love.", 124,162);
   fill(244,164,96);
//	text("alive", 205,303);
   fill(147,112,219);
//	text("alone", 455,214);
   fill(0,250,154);
//	text("ink", 405,187);
	fill(0,0,255);
	text("April", 322,75);
   fill(240,128,128);
//	text("Love", 8,353);
   fill(222,184,135);
//	text("rson", 143,303);
   fill(165,42,42);
//	text("Daisy,", 140,25);
   fill(255,69,0);
//	text("the", 9,244);
//	text("I", 250,187);
   fill(178,34,34);
//	text("nny", 182,75);
//	text("and", 75,353);
   fill(240,230,140);
//	text("pe", 112,303);
	fill(0,0,255);
	text("a", 334,162);
   fill(240,230,140);
//	text("the", 473,272);
   fill(238,130,238);
//	text("lovely", 58,25);
//	text("that", 130,244);
//	text("hear", 204,244);
   fill(255,99,71);
//	text("Bob", 8,403);
//	text("music", 112,272);



}
