let mic;

function setup() {
  createCanvas(windowWidth, windowHeight);
  

  mic = new p5.AudioIn();
  mic.start();
  
}

function draw() {
  background(64, 114, 149);

  let vol = mic.getLevel();
  fill(127);
  stroke(0);
  
  let h = map(vol, 0, 1, height, 0);
  ellipse(width / 2, h - 100, 100, 100);
}