let font;
let italic;
let sunsetImages = [];
let i = 0;

function preload() {
  // Load all images
  italic = loadFont("CrimsonPro-Italic.ttf")
  font = loadFont("crimsonpro-regular.ttf");
  sunsetImages.push(loadImage("sunset1.png"));
  sunsetImages.push(loadImage("sunset2.png"));
  sunsetImages.push(loadImage("sunset3.png"));
  sunsetImages.push(loadImage("sunset4.png"));
}

function setup() {
  createCanvas(660, 600);
}

function draw() {
  background(sunsetImages[i]);
  fill(0);
  textAlign(CENTER, CENTER);
  
 
  fill(0);
  textSize(23);
  textFont(italic);
  text("*click for sunset*", 330, 500);
  textFont(font);
  textAlign(LEFT);
  textSize(40);
  text("And when", 45, 60);
  text("she returned to the city,",45,105);
  text("you could see", 400, 270);
  text("the sun in her eyes,",250, 320);
}


function mousePressed() {
  i = (i + 1) % sunsetImages.length; // Loop through images
}