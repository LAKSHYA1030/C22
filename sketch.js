const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
var engine,world,object; 

function setup(){ 
  createCanvas(400,400); 
  engine = Engine.create(); 
  world = engine.world; 
  var options = {
  restitution: 1 
  }
  object = Bodies.rectangle(200,200,100,100, options);

  var Options = {
    isStatic: true 
  }
  Ground = Bodies.rectangle(200, 350, 400, 20, Options);
   World.add(world,object); 
   World.add(world,Ground);
  } 
  
  function draw(){ 
    background("orange"); 
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,100,100); 
    rect(Ground.position.x, Ground.position.y, 400, 20);

    drawSprites();
  }