var gamebg1img,gamebg2img,gamebg3img;
var skellyanimation;
var gokuanimation, gokustanding;
var gokuintro;
var Goku;
var vegitostanding,Vegito;
var lightAttack = 1, mediumAttack=2, Ultimate=3;
var gokula,gokuma,gokuu;
var vegitola,vegitoma,vegitou;
var keyPressedFrame =0

function preload(){


gamebg1img=loadImage("images/gamebg1.jpg")
gamebg2img=loadImage("images/gamebg2.jpg")
gamebg3img=loadImage("images/gamebg3.jpg")
gokustanding=loadAnimation("images/gokulightattack/tile000.png")
vegitostanding=loadAnimation("images/vegitoattacking/tile002.png.png");
gokula=loadAnimation("images/gokulightattack/tile000.png",
"images/gokulightattack/tile001.png",
"images/gokulightattack/tile002.png",
"images/gokulightattack/tile003.png",
"images/gokulightattack/tile004.png",
"images/gokulightattack/tile005.png",
"images/gokulightattack/tile006.png",
"images/gokulightattack/tile007.png",
"images/gokulightattack/tile008.png",
"images/gokulightattack/tile009.png",
"images/gokulightattack/tile010.png",
"images/gokulightattack/tile011.png",
"images/gokulightattack/tile012.png",
"images/gokulightattack/tile013.png",
"images/gokulightattack/tile014.png",
"images/gokulightattack/tile015.png",
"images/gokulightattack/tile016.png",
"images/gokulightattack/tile017.png",
"images/gokulightattack/tile018.png",
"images/gokulightattack/tile019.png",
"images/gokulightattack/tile020.png",
"images/gokulightattack/tile021.png")

gokuma=loadAnimation("images/gokumediumattack/tile000.png",
"images/gokumediumattack/tile001.png",
"images/gokumediumattack/tile002.png",
"images/gokumediumattack/tile003.png",
"images/gokumediumattack/tile004.png",
"images/gokumediumattack/tile005.png",
"images/gokumediumattack/tile006.png",
"images/gokumediumattack/tile007.png",
"images/gokumediumattack/tile008.png",
"images/gokumediumattack/tile009.png",
"images/gokumediumattack/tile010.png",
"images/gokumediumattack/tile011.png",
"images/gokumediumattack/tile012.png",
"images/gokumediumattack/tile013.png",
"images/gokumediumattack/tile014.png",
"images/gokumediumattack/tile015.png",
"images/gokumediumattack/tile016.png",
"images/gokumediumattack/tile017.png",
"images/gokumediumattack/tile018.png",
"images/gokumediumattack/tile019.png",
"images/gokumediumattack/tile020.png",
"images/gokumediumattack/tile021.png",
"images/gokumediumattack/tile022.png",
"images/gokumediumattack/tile022.png",
"images/gokumediumattack/tile023.png",
"images/gokumediumattack/tile024.png",
"images/gokumediumattack/tile025.png",
"images/gokumediumattack/tile026.png",
"images/gokumediumattack/tile027.png",
"images/gokumediumattack/tile028.png",
"images/gokumediumattack/tile029.png",
"images/gokumediumattack/tile030.png",
"images/gokumediumattack/tile031.png",
"images/gokumediumattack/tile032.png",
"images/gokumediumattack/tile033.png",
"images/gokumediumattack/tile034.png",
"images/gokumediumattack/tile035.png",
"images/gokumediumattack/tile036.png",
"images/gokumediumattack/tile037.png",
"images/gokumediumattack/tile038.png",
"images/gokumediumattack/tile039.png",)


}



function setup() {
  createCanvas(windowWidth,windowHeight);
  Goku = createSprite(windowWidth/4, windowHeight-120, 20, 40);
 Goku.addAnimation("gokustanding",gokustanding);
 Goku.addAnimation("gokula",gokula);
 Goku.addAnimation("gokuma",gokuma);
  Goku.scale = 3

  Vegito=createSprite(windowWidth-400,windowHeight-100,20,40);
  Vegito.addAnimation("vegitostanding",vegitostanding);
  Vegito.scale =2
  
}

function draw() {
  background(gamebg1img);  
  GokuAttack();
  drawSprites();
}

function VegitoAttack(){


}

function GokuAttack(){
if(keyDown("C")&& frameCount >= keyPressedFrame+30 ){
  Goku.changeAnimation("gokula",gokula);
  keyPressedFrame=frameCount
}
if(keyDown("V")&& frameCount >= keyPressedFrame+50){
  Goku.changeAnimation("gokuma",gokuma);
  keyPressedFrame=frameCount
}
}