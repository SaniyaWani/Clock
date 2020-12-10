var clockImage,hrAngle, sec, secAngle;
var hr;

function preload ()
{
  clockImage = loadImage("Clock.jpg");
}

function setup() 
{
  createCanvas(600,600);
  angleMode(DEGREES)
 
 
}

function draw()
{
  background(clockImage); 
  translate(300,300);
  stroke(157,135,71);
 

  //Second hand
  sec = second();
  secAngle = map(sec, 1, 60, 0, 360);
  push();
  rotate(secAngle);
  strokeWeight(5);
  line(0,0,220,0)
  pop();

  //Minute hand
  min1 = minute();
  minAngle = map(min1, 1, 60, 0, 360);
  push();
  rotate(minAngle);
  strokeWeight(10);
  line(0,0,170,0)
  pop();

  //Hour hand
  hr = hour();
  hrAngle = map(hr%12, 1, 12, 0, 360);
  push();
  rotate(hrAngle);
  strokeWeight(15);
  line(0,0,100,0)
  pop();

 
  
  drawSprites();
}