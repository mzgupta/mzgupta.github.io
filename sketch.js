var ball;
var force;
var wind;
function setup() { 
  createCanvas(1400, 700);
  ball = new Ball();
} 

function draw() { 
  background(0);
  force = createVector(0,0.3);
  wind = createVector(1.2,1.9);

  ball.applyForce(force);
  ball.applyForce(wind);
  ball.update();
  ball.edge();
  ball.display();
}