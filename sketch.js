const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
  
var engine , world;
var backgroundImg;

function preload(){
  backgroundImg = loadImage("images/snow1.png");
}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  backgroundImg = createSprite(400, 200, 800, 400);
  engine = Engine.create();
  world = Engine.world
}

function draw() {
  background("white");  
  drawSprites();
}