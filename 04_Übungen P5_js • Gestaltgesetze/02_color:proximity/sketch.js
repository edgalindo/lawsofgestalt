function setup() { 
createCanvas(500,500);
noStroke();
}

function draw() {
    for (var x = 0; x < width; x+=5) {
    for (var y = 0; y < height; y += 5) {
      fill(random(128, 175));
      rect(x, y, 5, 5);
    }
  }
}

function mousePressed(){
  save('image.jpg');
}