var car;
var Wall;
var weight;
var speed;
function setup() {
  createCanvas(800,400);
car = createSprite(50, 200, 50, 50);
car.shapeColor = "white";

Wall = createSprite(790,200,60,600);
Wall.shapeColor = "brown";
speed = random(50,90);
car.velocityX = speed;
}

function draw() {
  background("black");
 
  if ( Wall.x - car.x<(car.width+Wall.width/2))  {
  car.velocityX = 0;
  var def = 0.5*weight*speed*speed/22509;
  if (def>180){
car.shapeColor = color(255,0,0)
  }
 
 }
  drawSprites();
}