let audioStarted = false;
var mode = 0;
let entergate
var lowC
var lowD
var lowE
var lowG


let lK = 'LEFT_ARROW'
let rK = 'RIGHT_ARROW'
let dK = 'DOWN_ARROW'
let uK = 'UP_ARROW'

var levelValues = []

  function mousePressed() { // needed to get it to work in full screen mode
    // Start audio on user gesture
    if (!audioStarted) {
        userStartAudio();
        audioStarted = true;
    }
}


function preload(){
  lowC = loadSound("Inst1.wav");
  lowD = loadSound("Inst1D.wav");
  lowE = loadSound("Inst1E.wav");
  lowG = loadSound("Inst1G.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  splash = new Splash();
}

function keyCode(){
let lK = (LEFT_ARROW)
let rK = (RIGHT_ARROW)
let dK = (DOWN_ARROW)
let uK = (UP_ARROW) 
}

function draw() {
  if (mouseIsPressed == true && splash.update() == true) {
    mode = 1;
  }
  if (mode == 1) {
    splash.hide();
    
    // your code here
    background(255);
    fill(100);
    noStroke();
    rect(50, 50, windowWidth - 100, windowHeight - 100);
    fill(0);
    ellipse(mouseX, mouseY, 20, 20);
  }
  
  
  switch (mode) {
    case 0:
      background(255);
      entergate = 1
      break;
    case 1:
      scene1();
      break;
    case 2:
      scene2(lK,rK,dK,uK);
      break;
    case 3:
      scene3();   
      break;
    default:
}
}//end of draw

function keyPressed() { 

      
  if (keyCode === ENTER && entergate == 1) {
  mode++;}
  if (keyCode === ENTER && entergate != 1){mode = mode}
  
  if (keyCode === LEFT_ARROW){lowC.play(); textAlign(CENTER);
	textSize(50);
  fill(0,0,0);
	text("<------", width/2 , height - 700); }
  if (keyCode === RIGHT_ARROW){lowD.play() }
  if (keyCode === DOWN_ARROW){lowE.play() }
  if (keyCode === UP_ARROW){lowG.play() }
}

function scene1() {
  entergate = 1
  background('#FFE5CC');
  textAlign(CENTER);
	textSize(40);
  fill(0,0,0);
	text("Level 1", width / 2, height/2);
  //add play music code here
  textAlign(CENTER);
	textSize(25);
  fill(0,0,0);
	text("Press Enter to Play", width / 2 , height/2 + 40);
}
//playing/executing level 1
function scene2(rK,lK,uK,dK) {
  entergate = 0
  levelValues = [rK,lK,uK,dK]
  
  background(255, 255, 0);
 textAlign(CENTER);
	textSize(40);
  fill(0,0,0);
	text("Level 1", width/2 , height - 750);
  textAlign(CENTER);
	textSize(20);
  fill(0,0,0);
	text("Match This:", width/2 , height - 700);

 
}


function scene3() {
  background(255, 20, 80);
   textAlign(CENTER);
	textSize(40);
  fill(0,0,0);
	text("Level 2", width/2 , height - 750);
  textAlign(CENTER);
	textSize(20);
  fill(0,0,0);
	text("Now Match This:", width/2 , height - 700);
}