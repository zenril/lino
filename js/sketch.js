
var wind = null;
var myEnv = new MyEnviroment();

function setup() {
  createCanvas(windowWidth, windowHeight);
  wind = new MyWind();
  myEnv.tool.width = 7;

    var layer = myEnv.addLayer(new MyLayer(
      new MyLine(wind, 400, createVector(mouseX, mouseY , 1))
  ));

  myEnv.setCurrent(layer);
}

function mouseMoved() {
  //myEnv.mouseRadius(mouseX,mouseY, 75);
  mouseDragged();
}

function mousePressed() {


  
}

function mouseReleased(){
  //myEnv.setCurrent(null);
}

function mouseHover(){

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
  if(myEnv.current == null){
    
  }
  
  myEnv.update();  
  myEnv.draw();
}