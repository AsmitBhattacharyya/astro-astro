const Engine = Matter. Engine;
const World = Matter.World;
const Bodies = Matter. Bodies;
const Body = Matter. Body;

var background, Imgbackground;
var bathing, Imgbathing;
var brushing, Imgbrushing ;
var drinking, Imgdrinking;
var eating, Imgeating;
var gym1, Imggym1, gym2, Imggym2;
var sleeping, Imgsleeping;
var move, Imgmove;


function preload() {
bg = loadImage("images/background.png");
sleep = loadAnimation("images/sleeping.png");
brush = loadAnimation("images/brushing.png");
gym = loadAnimation("images/gym2.png","images/gym1.png");
eat = loadAnimation("images/eating.png");
drink = loadAnimation("images/drinking.png");
move = loadAnimation("images/move.png");
bath = loadAnimation("images/bathing.png");
}
function setup()  {
    createCanvas(400,400);
    
    astronaut = createSprites(300,230);
    astronaut.addAnimation("sleeping",sleeping);
    astronaut.scale = 0.1

    astronaut = createSprites(300,230);
    astronaut.addAnimation("brushing",brushing);
    astronaut.scale = 0.1

    astronaut = createSprites(300,230);
    astronaut.addAnimation("gymming",gym);
    astronaut.scale = 0.1

    astronaut = createSprites(300,230);
    astronaut.addAnimation("eating",eating);
    astronaut.scale = 0.1

    astronaut = createSprites(300,230);
    astronaut.addAnimation("drinking",drinking);
    astronaut.scale = 0.1

    astronaut = createSprites(300,230);
    astronaut.addAnimation("moving",move);
    astronaut.scale = 0.1

    astronaut = createSprites(300,230);
    astronaut.addAnimation("bathing",bathing);
    astronaut.scale = 0.1


}
function draw() {
    drawSprites();
    if(keyDown("UP_ARROW")){
        astronaut.addAnimation("brushing", brushing);
        astronaut.changeAnimation("brushing");
        astronaut.y = 350;
        astronaut.velocityX = 0;
        astronaut.velocityY= 0;
    }
    if(keyDown("DOWN_ARROW")){
        astronaut.addAnimation("gymming", gym);
        astronaut.changeAnimation("gymming");
        astronaut.y = 350;
        astronaut.velocityX = 0;
        astronaut.velocityY= 0; 
    }
    if(keyDown("LEFT_ARROW")){
        astronaut.addAnimation("eating", eating);
        astronaut.changeAnimation("eating");
        astronaut.y = 350;
        astronaut.velocityX = 0;
        astronaut.velocityY= 0;
    }
    if(keyDown("RIGHT_ARROW")){
        astronaut.addAnimation("bathing", bathing);
        astronaut.changeAnimation("bathing");
        astronaut.y = 350;
        astronaut.velocityX = 0;
        astronaut.velocityY= 0;
    }
    if(keyDown("m Key")){
        astronaut.addAnimation("moving", move);
        astronaut.changeAnimation("moving");
        astronaut.y = 350;
        astronaut.velocityX = 0;
        astronaut.velocityY= 0;
    }
}  