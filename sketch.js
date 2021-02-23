const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world, engine;
var dog,sadDog,happyDog;
var feed, addFood;
var foodObject;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);

  engine = Engine.create();
  world = engine.world;
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  foodObject = new Food(500, 200, 20, 20);

  feed = createButton("Feed the Dog");
  feed.position(700, 95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(800, 95);
  addFood.mousePressed(addFoods);
}

function draw() {
  background(46,139,87);

  Engine.update(engine);

  foodObject.display();

  drawSprites();
}

function feedDog() {
  dog.addImage(happyDog);

  if (foodObject.getFoodStock()<= 0) {
    foodObject.updateFoodStock(foodObject.getFoodStock()*0);
  } else {
    foodObject.updateFoodStock(foodObject.getFoodStock()-1);
  }
}


//function to update food stock and last fed time


function addFoods() {
  foodS++;
  database.ref('/').update({
    Food: foodS
  })
}