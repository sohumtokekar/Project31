
var engine, world;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body


function setup() {

  engine = Engine.create();
  world = engine.world;
  createCanvas(480,800);
  ground = new Ground(600,height,1200,20);
  

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);  
  drawSprites();
}