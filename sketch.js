const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1;
var box2;

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

box1 = new Box(420,100,50,100);
box2 = new Box(400,200,50,50);

ground = new Ground(400, 750, 800, 20);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
box1.display();
box2.display();
ground.display();

}