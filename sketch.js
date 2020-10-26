var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = []; 

var score = 0;
var Particle;
var turn = 0;
var gameState = 1;

var divisionHeight=300;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }



    
}


 

function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
   
   if(particles!=null)
   {
      particles.display();
      if(particles.body.position.y>760)
      {
         if(particles.body.position.x<300)
         {
            score = score+500;
            particles = null
            if (turn>= 5) gameState = 2
         }
      }
   }

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
 
   
   for (var j = 0; j < particles.length; j++) {
   
      particles[j].display();
    }
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   

   if (turn === 5)
   {      
      textSize(100)
      stroke("WHITE");
      fill("WHITE");
      text("Game Over",150,250);
      gameState === 2
   }

}
   



function mousePressed()
{    
   particles.push(new particle(mouseX , 10,10))
   turn = turn+1;
   console.log(turn);
}