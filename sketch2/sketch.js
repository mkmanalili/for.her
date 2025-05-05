let font;
function preload() {
  font = loadFont('CrimsonPro-Black.ttf');
  bg = loadImage("kelpforest.png");
}

let points;
let bounds;
let t;
let fontSize;

let posx;
let posy;
let bg;
let y = 0;

function setup() {
  // The background image must be the same size as the parameters
  // into the createCanvas() method. In this program, the size of
  // the image is 720x400 pixels.
 
}
function setup() {
  createCanvas(1500, 700);
  
  //rectMode(CORNER);
  noStroke(1);
  fill(0);
  
  t = "the wind in her hair and taste the infinite salt on her lips"; 
  fontSize = 58;
  textSize(fontSize);
  textFont(font);
  fill(0)
    
  let tw = textWidth(t);
  let th = textAscent(); // doesn't expect any kind of argument
  
  // position of upper left corner
  posx = (width - tw)/2;
  posy = (height + th)/2;
  
  // calculate text bounds
  bounds = font.textBounds(t, posx, posy, fontSize);
  
  // calculate points on text
  points = font.textToPoints(t, posx, posy, fontSize, {
    sampleFactor: 10,
    simplifyThreshold: 0,
    //separatePaths: true // returns: [paths][points]
    separateGlyphs: true // returns: [glyphs][paths][points] (supersedes separatePaths)
  });

  
  console.log("text width : " + textWidth(t));
  console.log("text bounds.w : " + bounds.w)
}

function draw() {
  background(bg);
  
  // Text Boundary draw
  //fill(0)
  //rect(bounds.x, bounds.y, bounds.w, bounds.h);
  
  // Actual Text Draw
  fill("antiquewhite");
  //text(t, posx, posy);
  
  // Points of text draw
  //fill("antiquew);
  //noFill(0,0,255);
  //stroke(0);
  
  
  for (let i = 0; i < points.length; i++) { // glyphs

    for (let j = 0; j < points[i].length; j++) { // paths

      beginShape();
      
      for (let k = 0; k < points[i][j].length; k++) { // points
        
        let p = points[i][j][k];
        vertex(p.x + cos(p.y/30 + millis()/700)* 10, 
               p.y);
        
      }
      endShape(CLOSE);
  }
  }


  


}