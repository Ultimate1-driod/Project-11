var sea, shipimage;
var SEA, SHIP;
var edges;
var invisiblesea;
var angle=0, increment=10;
var radius = 150
var audio = new Audio('cruise-ship-horn-sound.mp3')
function preload(){
  shipimage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  sea = loadImage("sea.png");
}

function setup(){
  createCanvas(1000,600);
  SEA = createSprite(200,180,400,20);
  SEA.addImage("sea",sea);
  angle = angle+increment;
  // creating trex
  SHIP = createSprite(300,186,20,50);
  SHIP.addAnimation("sailing", shipimage);
  edges = createEdgeSprites();
  //adding scale and position to trex
  SHIP.scale = 0.7;
  SHIP.x = 200
  SHIP.y = 280
  invisiblesea = createSprite(2500,160,50,20);
  invisiblesea.visible = false

}


function draw(){
  //set background color 
  background("white");
  
  if (keyDown("space")){
    audio.play();
    
  }
  //logging the y position of the trex
  console.log(SHIP.y);
  console.log(SHIP.x);

  SEA.velocityX = -10
  if (SEA.x < 0)
  {
    SEA.x = SEA.width / 2
  }
  //stop trex from falling down
  SHIP.collide(invisiblesea);
  drawSprites();
}