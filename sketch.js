var helicopterIMG, helicopterSprite, packageSprite,packageIMG;

var packageBody,ground ;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var b1 , b2, b3 ;

var flagstick , flag ;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	packageBody = new staticBody(width/2,205,10,10);
	
	ground = new staticBody(width/2 , 650 , width , 10);

	b1 = new staticBody(width/2 , 650 , 200, 20);

	b2 = new staticBody(310 , 610 , 20 , 100);

	b3 = new staticBody(490 , 610 , 20 , 100);

	b4 = new staticBody(width/2 , 635 , 200 , 20);
	 
	Engine.run(engine);

	packageSprite=createSprite(width/2, 205, 10,10);
	packageSprite.addImage("package" , packageIMG );
	packageSprite.scale=0.2;
	console.log(packageSprite);

	helicopterSprite=createSprite(width/2 + 20, 200, 10,10);
	helicopterSprite.addImage("helicopter", helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	flag = createSprite(150, 565, 100 , 60 );
	flag.shapeColor = "white";

	flagstick = createSprite(100, 600, 10, 125);
	flagstick.shapeColor = "white ";

}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  packageSprite.x= packageBody.body.position.x ;
  packageSprite.y= packageBody.body.position.y ;
  console.log(packageBody.body.position.y);
  rectMode(CENTER);
  textSize(25);
  textAlign(CENTER);
  textFont("Agency FB");
  fill("red");
  text("AIR DROP",150,585,100,60);
  fill("red");
  noStroke();
  b1.display();
  b2.display();
  b3.display();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Body.setStatic(packageBody.body,false);
  }
}


