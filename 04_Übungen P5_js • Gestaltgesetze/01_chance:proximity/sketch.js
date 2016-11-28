var x, y;
x = 20;
y =20;

function setup() {
  createCanvas(500, 500);
  smooth();
  frameRate(8);
}

function draw() {
  background(255);
  fill(0,85);
  ellipseMode(CORNER);
  ellipse(x+random(320,500), y+random(0,500), 40, 40);
  ellipse(x+random(150,300), y+random(0,300), 40, 40);
  
  fill(random(100),50);
  ellipseMode(CORNER);
  ellipse(x+random(0,500), y+random(0,500), 20, 20);
  rectMode(CORNER);
  rect(x+random(0,500), y+random(0,500), 20, 20);
    y += 1;
  if(y > height){
    y = 0;
  }
}

function mousePressed(){
  save('image.jpg');
}