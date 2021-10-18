var backgroung,snow1,snow2,snow3,snow4,snow4

function preload(){
  snow1= loadImage("snow1.jpg");
  snow2=loadImage("snow2.jpg");
  snow3=loadImage("snow3.jpg");
  snow4=loadImage("snow4.webp");
  snow5=loadImage("snow5.webp");
}

function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(snow2);
  snowfallimage()  
  drawSprites();

}
function snowfallimage(){
  if(
    frameCount%25===0
  )
  {
    snowfall=createSprite(random(0,800),10,20,20)
    snowfall.addImage(snow4)
    snowfall.scale=0.2
    snowfall.velocityY=3
  }
}