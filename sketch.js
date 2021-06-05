var canvas, backgroundImage;
var bird,birdi,bg;

function preload(){
  birdi = loadImage("fbird.png");
  bg = loadImage("bgi.png");
}

function setup(){
  canvas = createCanvas(displayWidth-4, displayHeight-120);
  database = firebase.database();

  bird = createSprite(200,500,30,30);
  bird.addImage(birdi);
  bird.scale = 0.25;


}

function draw(){
  background(bg);

  
  // camera.position.y = bird.y;camera.position.x = bird.x;
  if(keyCode === 32)
  {
    bird.y -= 3;
  }
  bird.y += 0.8;


  drawSprites();
}