const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone;
var iron;
var rubber;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    stone = new Stone(600,100,width,height);
    iron = new Iron(400,100,width,height);
    rubber = new Rubber(700,300,50);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    console.log(iron.position);

    plane.display();
    hammer.display();
    stone.display();
    iron.display();
    rubber.display();
 
}