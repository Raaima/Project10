
var sea, ship,s1,s2;

function preload(){
sea = loadImage("sea.png");
ship = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  s1 = createSprite(400,200);
  s1.addImage(sea);
  s1.scale = 0.3;
  s1.velocityX = -4;
  s2 = createSprite(200,200);
  s2.addAnimation("SHIP",ship);
  s2.scale = 0.3;
}
function draw() {
  background("blue");
  if(s1.x<0)
  {
    s1.x = s1.width/8; 
  }
 drawSprites();
}