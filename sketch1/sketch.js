var starfish;

let img;
function preload(){
  img = loadImage("STARFISH.png");
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  cnv.style('z-index', '3');
  cnv.style('position', 'absolute');
  imageMode(CENTER);
 
}

function draw() {

}

function mousePressed(){
  
  image(img, mouseX, mouseY);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}