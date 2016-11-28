var x, y;
x = 20;
y =40;

function setup() {
  createCanvas(500, 500);
  smooth();
}

function draw() {
  background(255);
  fill(0,85);
  ellipse(width/2, height/2, y, y+random(0,200));
  ellipse(width/2, height/2, y+random(0,200), y);
    y += 1;
  if(y > width){
    y = 0;
  }
}

function mousePressed(){
  save('image.jpg');
}