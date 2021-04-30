var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy,fairyImg,fairyBody,fairyVoice,fairyAnim,fairySound;



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg=loadImage("images/fairyImage1.png");
	//load animation for fairy here
	fairyAnim = loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
	
	//Sound
	//fairySound=loadSound("JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy
fairy=createSprite(160,659,20,20);
fairy.addImage(fairyImg);
fairy.scale = 0.29

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
  //var star_options = {restitution :0}
  var fairy_options = { isStatic : true }
  object = Bodies.rectangle(160,659,20,fairy_options);
   World.add(world,object);

   var star_options = {restitution :0 }
   star =Bodies.circle(200,100,20,star_options); 
   World.add(world,star);
 

console.log(object);
console.log(object.type);
console.log(object.label);
console.log(object.position.x);
console.log(object.position.y); 

 
Engine.update(engine);
rectMode(LEFT); 
rect(fairy.position.x,fairy.position.y,600,50); 
ellipseMode(RADIUS);
ellipse(star.position.x,star.position.y,20,20)
   
  drawSprites();
}


function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if (keyCode === RIGHT_ARROW) {
		fairy.x = fairy.x + 20;
       
	}
	if (keyCode === LEFT_ARROW) {
		fairy.x = fairy.x - 20;
		
}
}
