var myLine = null;
var wind = null;
function setup() {
  createCanvas(windowWidth, windowHeight);
  wind = new MyWind();
  myLine = new MyLine(wind, 70, createVector(windowWidth / 2, windowHeight / 2, 1));

  console.log(myLine);
}

function mouseMoved() {
  if(myLine.points[0]){
    v = myLine.points[0];
    v.x = mouseX;
    v.y = mouseY;
    v.z = 1; 
  }
}


function draw() {
  background(255,255,255,2);
  wind.update();
  myLine.update();
  myLine.draw();
}