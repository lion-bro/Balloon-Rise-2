const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var sky, skyIMG, balloon, balloonIMG;
var cursor1, cursorIMG;
var square;
var gameState;

function preload(){
    balloonIMG = loadImage("Images/Balloon.png");
    skyIMG = loadImage("Images/sky.jpg");
    cursorIMG = loadImage("Images/Cursor.png");
}

function setup(){

createCanvas(1200,800);

engine = Engine.create();
world = engine.world;

balloon = createSprite(600,650);
balloon.addImage(balloonIMG);
balloon.scale = 0.3;

cursor1 = createSprite(600,620);
cursor1.addImage(cursorIMG);
cursor1.scale = 0.05;

squareGroup = new Group();

gameState = "play";

//sky = createSprite(600,400,1600,800);
//sky.addImage(skyIMG);
//sky.y = sky.height/2;

}

function draw(){
    background(skyIMG);
    Engine.update(engine);

    if(gameState === "play"){

        cursor1.x = mouseX;
        cursor1.y = mouseY; 
        
        squares();

        if(squareGroup.isTouching(cursor1)){

        }

        if(squareGroup.isTouching(balloon)){
            gameState = "end";
        }

    }

    if(gameState === "end"){
        console.log("boo");
    }
    
    drawSprites();
    
}

function squares(){
    if (frameCount % 60 === 0) {
        square = new Square(random(550,650),0,40,40);
        //square.velocityY = 5;
        console.log(square);
        squareGroup.add(square);
        
    }
}