
var wind = null;
var myEnv = new MyEnviroment();

function setup() {
  createCanvas(windowWidth, windowHeight);
  wind = new MyWind();
  myEnv.tool.width = 7;
}

function mouseMoved() {
  //mouseDragged();
}

function mousePressed() {
  var layer = myEnv.addLayer(new MyLayer(
      new MyLine(wind, 1400, createVector(mouseX, mouseY , 1))
  ));

  myEnv.setCurrent(layer);

  
}


function mouseDragged() {
  //mouseMoved( );
  
  var myLine = myEnv.current.line;

  if( myLine && myLine.points[0] ){
    v = myLine.points[0];
    v.x = mouseX;
    v.y = mouseY;
    v.z = 1;    
  }
}


function draw() {
  background( 255,255,255,2);
  wind.update();
  myEnv.update();
  myEnv.draw();
}