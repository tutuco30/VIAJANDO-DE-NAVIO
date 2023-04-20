var oceano;
var oceanoimg;
var barco;
var barcoimg;
function preload(){
barcoimg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
oceanoimg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  oceano =createSprite(200,200);
  oceano.addImage(oceanoimg)

  barco =createSprite(200,200);
  barco.addAnimation("barco",barcoimg)
  barco.scale =0.5
}

function draw() {
  background("blue");
    drawSprites();

 
}
