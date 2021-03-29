
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, stone1;
var world,boy;
var sling1

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1200,120,30);
	mango3=new mango(1000,150,30);
	mango4=new mango(900,120,30);
	mango5=new mango(970,270,30);
	mango6=new mango(1060,250,30);
	mango7=new mango(1160,250,30);
	stone1 = new stone(235, 420, 30);
	
	sling1 = new sling(stone1.body,{x:240, y:425});

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone1.display();
 sling1.display();
  groundObject.display();
  collide(stone1, mango1)
  collide(stone1, mango2)
  collide(stone1, mango3)
  collide(stone1, mango4)
  collide(stone1, mango5)
  collide(stone1, mango6)
  collide(stone1, mango7)
}
function mouseDragged(){
	Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY})
}
function mouseReleased(){
	sling1.fly()
}
function collide(object1, object2){
    if((object1.body.position.x-object2.body.position.x < object1.r+object2.r) && (object2.body.position.x-object1.body.position.x < object2.r+object1.r)
		&& (object1.body.position.y-object2.body.position.y < object1.r+object2.r) && (object2.body.position.y-object1.body.position.y < object2.r+object1.r)){
			Matter.Body.setStatic(object2.body, false)
		}
}
