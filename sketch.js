const Engine = Matter.Engine
const World = Matter.World;
const Bodies = Matter.Bodies;

var bubbles = [];

var random1 = 0;
var bubbles1;
var r1;

function setup() 
{
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world

  r1 = new Bubbles();
  bubbles.push(r1); 
  r1.body.velocity.y = 100;
  console.log(r1.body.velocity.y);
}

function draw()
{
  background("white");  
  Engine.update(engine);
  //console.log(raindrops);
  //random1 = random(10,400);
  //r1.display();

  bubbles1 = new Bubbles();
  //raindrop1.body.speed = random(50,100);
  bubbles.push(bubbles1);

  for(var i = 0; i < bubbles.length; i=i+1)
  {
    bubbles[i].display();
    //console.log(raindrops[i].body.speed);
  }
  
  drawSprites();
}