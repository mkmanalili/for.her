//chatgpt used for debugging when asked, "how do i get it so that the array restarts when all the words clear "
let words = ["the","ocean", "was", "more", "than", "a", "dream,"];
let originalWords = [...words];
let stampedWords = [];
let font;
let img;

function preload(){
 font = loadFont("CrimsonPro-SemiBoldItalic.ttf");
img = loadImage("sand.png");
}

function setup() {
  createCanvas(800,800);
  textFont(font);
  textSize(60);
  textAlign(CENTER);
}

function draw() {
  background(img);
 fill(0);
  textSize(28);
  textFont(font);
  text("*click on the sand*", 400, 700);
  //chatgpt used for debugging when asked, "how do i get it so that the array restarts when all the words clear "
  textSize(60);
  for (let i = stampedWords.length - 1; i >= 0; i--) {
    let w = stampedWords[i];
    fill(0, w.alpha);
    text(w.word, w.x, w.y);
    w.alpha -= 1; // Fade out

    // Remove word when fully transparent
    if (w.alpha <= 0) {
      stampedWords.splice(i, 1);
    }
  }
}

function mousePressed() {
  if (words.length === 0) {
    words = [...originalWords]; // Reset to original list
  }

  let word = words.shift(); // Take next word
  stampedWords.push({ word: word, x: mouseX, y: mouseY, alpha: 255 });

}