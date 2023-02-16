var jerry , jerryCheese
var tom
var cheeseGroup
var gameOver
function preload()  {
  jerry = loadImage("jerry_running.png")
  jerryCheese = loadImage("jerry_cheese.png")
  tom = loadImage("tom_running.png")
  cheeseGroup = loadImage("cheese.png")
  gameOver = loadImage("gameOver.png")
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
//create the background
//create Jerry
//create Tom
//create cheeseGroup
}

function draw() {
  background(255,255,255);  
//moving Jerry and Tom

//Jerry collision with cheese
//Jerry change of Animation
//Destroy cheese when Jerry touches it
//Jerry collision with Tom


  drawSprites();
}