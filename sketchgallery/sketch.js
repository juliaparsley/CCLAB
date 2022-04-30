let x = 0;

let x1 = 200;
let y1 = 200;

let speedX1 = 0;
let speedY1 = 0;

function setup() {
  createCanvas(400, 400);
  // setupGif(50);   
  speedX1 = random(-3, 3);
  speedY1 = random(-3, 3);
}

function draw() {
  // beginGif();

  background(0, 10);

  noStroke();
  fill("yellow");
  ellipse(x1, y1, 12, 12);
  ellipse(x1 / 2, y1, 5, 5);
  ellipse(x1 / 8, y1 / 2, 10, 10);
  ellipse(x1 + y1, y1 / 10, 6, 6);
  ellipse(100, y1 / speedY1, 10, 10);
  ellipse(x1 + 100, y1 + 100, 8, 8);

  if (x1 < 0) {
    x1 = width;
  } else if (x1 > width) {
    x1 = 0;
  }
  if (y1 < 0) {
    y1 = height;
  } else if (y1 > height) {
    y1 = 0;
  }

  noStroke();
  fill("white");
  ellipse(x1 / random(-10, 10), y1 / random(-10, 10), 3, 3);

  x1 = x1 + speedX1;
  y1 = y1 + speedY1;

  // endGif(300);    
}
