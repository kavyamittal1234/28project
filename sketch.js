
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()
{
boyImage=loadImage("boy.png");	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground=new Ground(600,790,1200,20);
tree=new Tree(1000,600,500,500);
stone=new Stone(500,600);
mango1=new Mango(950,500);
mango2=new Mango(930,430);
mango3=new Mango(1000,590);
mango4=new Mango(890,600);


launcher=new Launcher(stone.body,{x:180,y:600})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image (boyImage,200,580,200,300);
  ground.display();
tree.display();
stone.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
launcher.display();

  drawSprites();
 detectollision(stone,mango1);
 detectollision(stone,mango2);
 detectollision(stone,mango3);
 detectollision(stone,mango4)
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    launcher.fly();
}

function detectollision(lstone,lmango){
	mangoBposition=lmango.body.position;
	stoneBposition=lstone.body.position;

var distance =dist(stoneBposition.x,stoneBposition.y,mangoBposition.x,mangoBposition.y)
if(distance<=lmango.r+lstone.r)
{
	Matter.Body.setStatic(lmango.body,false);
}


}
