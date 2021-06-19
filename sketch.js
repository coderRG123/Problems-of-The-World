var gameState="Start";
var info;
var start;
//level 1
var ocean;
var score=0;
var trashIMG, trash;
var paperIMG, paper;
var cokeIMG, coke;

//level2
var track;
var carIMG, car;
var treeIMG, tree;
var distance=0;

//level3
var Artic;
var ice1, ice2;
var home;
var pbearIMG, pbear;
var fishIMG, fish;
var food=0;

//level4
var Wildfire;
var ground;
var truckIMG, truck;
var fhIMG, fh;
var firePoints=0;

//end
var World;
function preload(){
  //level1
  ocean=loadImage("Images/Ocean.jpeg");
  trashIMG=loadImage("Images/Water bottle.png");
  paperIMG=loadImage("Images/paper.png");
  cokeIMG=loadImage("Images/Coke.png");

//level2
  track=loadImage("Images/Road.jpg");
  carIMG=loadImage("Images/Car.png");
  treeIMG=loadImage("Images/Tree.png");

  //level3
  Artic=loadImage("Images/Artic.png");
  pbearIMG=loadImage("Images/PolarBear.png");
  fishIMG=loadImage("Images/Fish.png");

  //level4
  Wildfire=loadImage("Images/Wildfire.jpg");
  truckIMG=loadImage("Images/firetruck.png");
  fhIMG=loadImage("Images/fire hydrant.png");

  //end
  World=loadImage("Images/World.jpg");
}
function setup() {
  createCanvas(400, 400);
info=createInput("");
info.position(450, 250);
  
  start=createButton("Play");
  start.position(520, 280);

  //level1
 trash=createSprite(200, -100, 10, 10);
 trash.addImage(trashIMG);
 trash.scale=0.1;

 paper=createSprite(200, -100, 10, 10);
 paper.addImage(paperIMG);
 paper.scale=0.3;

 coke=createSprite(200, -100, 10, 10);
 coke.addImage(cokeIMG);
 coke.scale=0.07;

 //level2
 car=createSprite(200, -100);
 car.addImage(carIMG);
 car.scale=0.2;

 tree=createSprite(300, -100);
 tree.addImage(treeIMG);
 tree.scale=0.8;

 //level3
 pbear=createSprite(200, -100, 20, 20);
 pbear.addImage(pbearIMG);

 ice1=createSprite(100, -100, 40, 40);
 ice1.shapeColor="darkblue";
 ice2=createSprite(100, -100, 40, 40);
 ice2.shapeColor="darkblue";
 home=createSprite(50, -100, 50, 50);
 home.shapeColor="blue";

 fish=createSprite(200, -100, 10, 10);
 fish.addImage(fishIMG);
 fish.scale=0.05

 //level4
 ground=createSprite(200, -100, 400, 10);
 ground.shapeColor="Red";

 truck=createSprite(100, -100, 10, 10);
 truck.addImage(truckIMG);
 truck.scale=0.2;

 fh=createSprite(500, -100, 10, 10);
 fh.addImage(fhIMG);
 fh.scale=0.3

}

function draw() {
 background(255);

  if(gameState==="Start"){
    background(World);
    fill("red"); 
    textSize(20);


  text("PROBLEMS OF THE WORLD", 100, 50);
    textSize(15);
    text("NAME:", 50, 215);
  start.mousePressed(()=>{
    start.hide();
    info.hide();
    gameState="Note";
  })
  }
  
  if(gameState==="Note"){
    textSize(15);
    text("Hello "+info.value()+",", 10, 50);
    fill("red");
    start.hide();
    info.hide();
    text("WARNING:In this level only collect the water bottles!!!", 10, 70);
    text("STORY: Me and my friend went to a lake and noticed", 10, 100);
    text("that there was so much garbage.Help us clean up the", 10, 130);
    text("water bottles", 10, 160);
    fill("gray");
     text("PRESS ENTER TO MOVE ON", 100, 300);
     if(keyDown("enter")){
       gameState="Play";
       trash.y=200;
       paper.y=300;
       coke.y=250;
     }
  }
  if(gameState==="Play"){
    background(ocean);
    start.hide();
    info.hide();
    textSize(20);
    
    fill("red");
    stroke("red");
    textSize(15);
text(score, 50, 50);
    if(mousePressedOver(trash)){
      trash.y=random(50, 350);
      trash.x=random(50, 350);
      paper.y=random(50, 350);
      paper.x=random(50, 350);
      coke.y=random(50, 350);
      coke.x=random(50, 350);
      score+=1;
    }
    if(mousePressedOver(paper)){
      trash.y=random(50, 350);
      trash.x=random(50, 350);
      paper.y=random(50, 350);
      paper.x=random(50, 350);
      coke.y=random(50, 350);
      coke.x=random(50, 350);
      score-=1;
    }

    if(mousePressedOver(coke)){
      trash.y=random(50, 350);
      trash.x=random(50, 350);
      paper.y=random(50, 350);
      paper.x=random(50, 350);
      coke.y=random(50, 350);
      coke.x=random(50, 350);
      score-=1;
    }

    if(score===10){
      trash.y=300
      paper.y=350;
      coke.y=100;
      text("DID YOU KNOW THAT THE OCEAN ", 50, 200);
      text("IS BEING POLUTED?", 50, 250);
    }

    if(score===20){
      trash.y=300;
      paper.y=350;
      coke.y=100;
      text("Water pollution kills around ", 50, 150);
      text("10,000 people around the world ", 50, 200);
      text("every day - that's 3.6 million people every year ", 50, 250); 
    }

    if(score===30){
      trash.y=300;
      paper.y=350;
      coke.y=100;
      text("40 percent of all lakes and rivers  ", 50, 150);
      text("in the United States are too polluted  ", 50, 200);
      text("for fishing and swimming; ", 50, 250); 
    }

    if(score>31){
      gameState="Note2";
      trash.y=-100;
      paper.y=-100;
      coke.y=-100;
    }
}

if(gameState==="Note2"){
  textSize(15);
  start.hide();
  info.hide();
  text("Me and my friends went on a road trip and we noticed that there", 10, 50);
  text("there were trees on the roads. Help us avoid the trees", 10, 100);
  text("PRESS SPACE TO PLAY", 100, 350);
  if(keyDown("space")){
    gameState="Level2";
    tree.y=100;
    car.y=350;
  }
}

if(gameState==="Level2"){
  background(track);
  start.hide();
  info.hide();
  textSize(15);
  fill("red");
  text(distance, 50, 50);
  distance+=1;
  if(keyDown("right")&&car.x>50&&car.x<350){
    car.x+=5;
  }

  if(keyDown("left")&&car.x>50&&car.x<350){
    car.x-=5;
  }

  tree.y+=6

  if(tree.y>400){
    tree.y=50
    tree.x=random(70, 330);
  }
if(car.isTouching(tree)){
  tree.y=50;
  car.x=200;
  tree.x=random(70, 330);
  distance=0;
}

if(distance>1000){
  if(tree.y>390){
    background(255);
    distance=1000;
    car.y=-100;
    tree.x=500;
    gameState="Info";
  }
}
}
if(gameState==="Info"){
  start.hide();
  info.hide();
  text("Did you know that people are cuting down trees", 20, 50);
  text("and are hurting our planet?", 20, 80);
  text("Global warming is happeng because people are cutting trees.", 20, 110);
  text("Tress help us breathe", 20, 140);
  text("Did you know that using gasoline cars make Global warming happen?", 20, 170);
  fill("red");
  text("PRESS shift to Play", 100, 350);
  if(keyDown("shift")){
    gameState="Note3";
  }
}

if(gameState==="Note3"){
  start.hide();
  info.hide();
  text("Me and my friend saw that there was a polar bear ", 50, 50);
 text("stranded on a ice peice.In this level you need to", 50, 70);
 text(" move some ice peices to help the polar bear get some fish", 50, 90);
 text("When you have caught 10 fishes then take him home", 50, 110);
 text("PRESS space to play", 150, 350);
 if(keyDown("space")){
   gameState="Level3";
   ice2.y=200;
   ice1.y=100;
  home.y=350;
  home.x=350;
  pbear.x=ice1.x-10;
  pbear.y=ice1.y-10;
  fish.y=300;
 }
}

if(gameState==="Level3"){
  background(Artic);
  start.hide();
  info.hide();
  fill("red");
  textSize(20);
  text("HOME", 320, 320);
text(food, 200, 50)
  

  if(ice2.isTouching(ice1)){
    ice1.x=mouseX
    ice1.y=mouseY
    pbear.x=ice2.x
    pbear.y=ice2.y;
    if(food>9){
    if(ice1.isTouching(home)||ice2.isTouching(home)){
      gameState="Info3";
      ice1.y=-100;
      ice2.y=-100;
      pbear.y=-100;
      home.y=-100;
      fish.y=-100;
    }
  }
    

  }else{
    ice2.x=mouseX
    ice2.y=mouseY
  }

 if(pbear.isTouching(fish)){
   fish.x=random(50, 350);
   fish.y=random(50, 350);
   food+=1;
 }
}

if(gameState==="Info3"){
  start.hide();
  info.hide();
  text("Glaciers are polar bears homes and because", 50, 50);
  text("of Global warming glaciers are melting.", 50, 80); 
  text("Did you know that there are only 31,000 polar bears left?", 50, 110);
  text("People are saying that by 2050 there will be no polar bears left.", 50, 140);
  text("Press ENTER TO Contiune", 150, 350);
  if(keyDown("enter")){
    gameState="Note4";
  }
}


if(gameState==="Note4"){
  start.hide();
  info.hide();
text("Me and my friend saw that there was a tree on fire.", 50, 50);
text("Help us drive the firetruck to the fire.", 50, 100);
text("PRESS shift to Play", 150, 350);
if(keyDown("shift")){
  gameState="Level4";
  ground.y=390;
  truck.y=350;
  fh.y=355;
}
}

if(gameState==="Level4"){
background(Wildfire);
start.hide();
info.hide();
fill("red");
textSize(15);
text("Use the up arrow key to jump over the obstacles", 70, 50);
text("Distance traveled:"+firePoints, 20, 20);

text
truck.y+=4
fh.x-=5
firePoints+=1

if(keyDown("up") && truck.y >= 360){
  truck.velocityY = -19;
}
truck.velocityY = truck.velocityY + 0.6

if(fh.x<-50){
  fh.x=550;
}

if(truck.isTouching(fh)){
  truck.y=350;
  fh.x=550;
  firePoints=0;
}

if(firePoints>1500){
  fh.y=-100;
  truck.y=360;
  truck.velocityX=5;
  if(truck.x>450){
    gameState="Info4"; 
ground.y=-100;
truck.y=-100;
truck.x=600;
fh.y=-100;
  }
}
}

if(gameState==="Info4"){
  start.hide();
  info.hide();
text("The temputures are rising and are making trees burn down.", 50, 50);
text("Since 2000, 15 forest fires in the United States", 50, 80);
text(" have caused at least $1 billion damage each.", 50, 110);
text("Press space to proceed", 150, 350);
if(keyDown("space")){
  gameState="End";
}
}

if(gameState==="End"){
background(World);
start.hide();
info.hide();
fill("red");
textSize(25);
text("WE NEED TO KEEP OUR", 50, 200);
text("PLANET SAVE", 100, 250);

}


truck.bounceOff(ground);

fh.setCollider("rectangle", 0,0, 20, 20);

drawSprites();
}


