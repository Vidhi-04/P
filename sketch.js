const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var particles = []
var plinkos = []
var divisions = []


function setup() {
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  createCanvas(550, 550);
  ground = new Ground(272, 530, 560, 20)
  console.log(width, height)
  console.log(outerWidth, outerHeight)
}

function draw() {
  background("black"); 
  ground.display();
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  }
 
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
  var divisionHeight = 200;
  for(var k = 0; k <= width+1; k += 91.6666666667) {
    divisions.push(new Divisions(k, height-divisionHeight/2-20, 15, divisionHeight))
  }

  
  //for 1 row of plinko
  for(var j = 40; j <= width; j += 50) {
    plinkos.push(new Plinko(j, 75))
  }

    //for 2 row of plinko
    for(var j = 15; j <= width; j += 50) {
      plinkos.push(new Plinko(j, 125))
    }
      //for 3 row of plinko
  for(var j = 40; j <= width; j += 50) {
    plinkos.push(new Plinko(j, 175))
  }

    //for 4 row of plinko
    for(var j = 15; j <= width; j += 50) {
      plinkos.push(new Plinko(j, 225))
      }
    //for 5 row of plinko
  for(var j = 40; j <= width; j += 50) {
    plinkos.push(new Plinko(j, 275))
  }
    for(var k = 0; k < divisions.length; k++) {
      divisions[k].display();
    }
    for(var j = 0; j < plinkos.length; j++) {
      plinkos[j].display();
    }
}