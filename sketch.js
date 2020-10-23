const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var car1, car2, car3, boundary1, boundary2, wall1, wall2;

var deformation, speed, weight;

var cnvs;

function setup() {
  cnvs = createCanvas(1600,400);
  engine = Engine.create();
  world = engine.world;
  
  wall1 = createSprite(1500, 50, 30, 80);
  wall1.shapeColor = color(80, 80, 80);

  wall2 = createSprite(1500, 200, 30, 80);
  wall2.shapeColor = color(80, 80, 80);

  wall3 = createSprite(1500, 350, 30, 80);
  wall3.shapeColor = color(80, 80, 80);

  car1 = createSprite(100, 50, 80, 30);
  car1.shapeColor = color(255, 255, 255);

  car2 = createSprite(100, 200, 80, 30);
  car2.shapeColor = color(255, 255, 255);

  car3 = createSprite(100, 350, 80, 30);
  car3.shapeColor = color(255, 255, 255);

  boundary1 = createSprite(800, 125, 1600, 20);
  boundary2 = createSprite(800, 275, 1600, 20);

  speed1= random(55, 80);
  speed2 = random(55, 80);
  speed3 = random(55, 80);
  weight = random(400, 1500);

}

function draw() {
  background(0, 0, 0);
  if(keyCode === 32){
    car1.velocityX = speed1;
    car2.velocityX = speed2;
    car3.velocityX = speed3;
  }
  if(keyCode === 20){
    reset();
  }

  if(keyCode === 114 && car1.velocityX === 0 && car2.velocityX === 0 && car3.velocityX === 0){
    reset();
  }
  
  if(car1.isTouching(wall1)){
    car1.velocityX = 0;
    var damage1 = (0.5 * weight * speed1 *speed1)/2250;
    //console.log(damage1);
    if(damage1>850){
      car1.shapeColor = color(255, 0, 0);
    }
    if(damage1<850 && damage1>500){
      car1.shapeColor = color(230, 230, 0);
    }
    if(damage1<500){
      car1.shapeColor = color(0, 255, 0);
    }
  }

  if(car2.isTouching(wall2)){
    car2.velocityX = 0;
    var damage2 = (0.5 * weight * speed2 *speed2)/2250;
    //console.log(damage1);
    if(damage2>850){
      car2.shapeColor = color(255, 0, 0);
    }
    if(damage2<850 && damage1>500){
      car2.shapeColor = color(230, 230, 0);
    }
    if(damage2<500){
      car2.shapeColor = color(0, 255, 0);
    }
  }

  if(car3.isTouching(wall3)){
    car3.velocityX = 0;
    var damage3 = (0.5 * weight * speed3 *speed3)/2250;
    //console.log(damage1);
    if(damage3>850){
      car3.shapeColor = color(255, 0, 0);
    }
    if(damage3<850 && damage1>500){
      car3.shapeColor = color(230, 230, 0);
    }
    if(damage3<500){
      car3.shapeColor = color(0, 255, 0);
    }
  }

  drawSprites();
}

function reset(){
  car1.position.x = 100;
  car2.position.x = 100;
  car3.position.x = 100;
  car1.shapeColor = color(255, 255, 255);
  car2.shapeColor = color(255, 255, 255);
  car3.shapeColor = color(255, 255, 255);
  speed1= random(55, 80);
  speed2 = random(55, 80);
  speed3 = random(55, 80);
}