const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var chain1;

var dustbinObj, paperObject,groundObject;	

var world;

var bin, binImage, dustbingreen;

var paperobj, paperImage, crumbledpaper;

function preload(){

	binImage = loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(1600, 400);

	engine = Engine.create();
	world = engine.world;

	dustbinObj = new dustbin(1220,350);

    bin = createSprite(1220,290,20,20);
	bin.addImage(binImage);
	bin.scale = 0.5

	paperObject=new paper(700,220,70,70);

	groundObject=new ground(width/2,370,width,20);	

	launcher = new Launcher(paperObject.body,{x:700,y:100});

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("grey");

  paperObject.display();
  groundObject.display();

  launcher.display();

  dustbinObj.display();
  bin.display();

}

function mouseDragged(){

	Matter.Body.setPosition(paperObject.body,{x:mouseX,y:mouseY});
 
 }
 
 function mouseReleased(){
 
	launcher.fly();
 
 }
 


