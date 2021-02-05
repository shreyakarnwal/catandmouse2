var catanimation,mouseanimation,gardenimage;
var catimage,mouseimage,catlastimage,mouselastimage;
var mouse, cat, backgroundimage;
function preload() {
    //load the images here
    catimage = loadImage("cat1.png");
    mouseimage=loadImage("mouse1.png");
    catlastimage= loadImage("cat4.png");
    mouselastimage = loadImage("mouse2.png");
    catanimation= loadAnimation( "cat2.png", "cat3.png");
    mouseanimation= loadAnimation( "mouse2.png", "mouse3.png","mouse4.png");
    gardenimage= loadImage("garden.png");
}

function setup(){
    createCanvas(1000,1000);
    backgroundimage= createSprite(0,0,1200,1200);
    backgroundimage.addImage("background", gardenimage);
    backgroundimage.scale= 2;

   
    mouse= createSprite(200,300,10,10);
    mouse.addImage("mouse", mouseimage);
    mouse.scale=0.2;
    mouse.debug=true;
    cat= createSprite(800,300,10,10);
    cat.addImage("cat", catimage);
    cat.scale=0.2;
    cat.debug=true;
    cat.setCollider("rectangle",0,0,20,20);
    mouse.setCollider("rectangle",0,0,20,20);
}

function draw() {

    background("white");
    //Write condition here to evalute if tom and jerry collide
    keyPressed();

    if(cat.x-mouse.x<(cat.width + mouse.width)/2 && 
    mouse.x-cat.x<(cat.width + mouse.width)/2){
        cat.addAnimation("catstop",catlastimage);
        cat.changeAnimation("catstop", catlastimage);
        mouse.addAnimation("mousestop", mouselastimage);
        mouse.changeAnimation("mousestop", mouselastimage);
        cat.velocityX=0;
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown (LEFT_ARROW)){
      cat.velocityX=-2;
      cat.addAnimation("catrunning",catanimation)
      cat.changeAnimation("catrunning",catanimation);
      mouse.addAnimation("mouserunning", mouseanimation);
      mouse.changeAnimation("mouserunning");
  }

}
