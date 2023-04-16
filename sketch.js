class Mover {
 constructor(loc, vel, acc, m){
 this.location = loc;
 this.mass = m;
 this.velocity = vel;
 this.acceleration = acc;
 }
 update(){
 this.velocity.add(this.acceleration);
 this.location.add(this.velocity);
 }
 display(){
 noStroke();
 ellipse(this.location.x, this.location.y, 8*this.mass, 8*this.mass);
 }
  applyForce(force){
    force.div(this.mass)
    this.acceleration.add(force);
  }
}

function windowResized() {
 resizeCanvas(windowWidth, windowHeight);
}




function setup() {
  createCanvas(windowWidth, windowHeight);
  

  merkuriusPos = createVector(width*0.1/4,height/6);
  merkuriusVel = createVector(0,3.37);
  merkuriusAcc = createVector(0,0);
  merkuriusMass = 5;
  merkurius = new Mover(merkuriusPos, merkuriusVel, merkuriusAcc, merkuriusMass);
  
 
  venusPos = createVector(width*0.5/4,height/6);
  venusVel = createVector(0,8.87);
  venusAcc = createVector(0,0);
  venusMass = 15;
  venus = new Mover(venusPos, venusVel, venusAcc, venusMass);


  bumiPos = createVector(width*1/4,height/6);
  bumiVel = createVector(0,9.8);
  bumiAcc = createVector(0,0);
  bumiMass = 20;
  bumi = new Mover(bumiPos, bumiVel, bumiAcc, bumiMass);
  
  marsPos = createVector(width*1.5/4,height/6);
  marsVel = createVector(0,3.721);
  marsAcc = createVector(0,0);
  marsMass = 10;
  mars = new Mover(marsPos, marsVel, marsAcc, marsMass);
  
  jupiterPos = createVector(width*2/4,height/6);
  jupiterVel = createVector(0,24.79);
  jupiterAcc = createVector(0,0);
  jupiterMass = 45;
  jupiter = new Mover(jupiterPos, jupiterVel, jupiterAcc, jupiterMass);
  
  saturnusPos = createVector(width*2.5/4,height/6);
  saturnusVel = createVector(0,10.44);
  saturnusAcc = createVector(0,0);
  saturnusMass = 35;
  saturnus = new Mover(saturnusPos, saturnusVel, saturnusAcc, saturnusMass);
  
  uranusPos = createVector(width*3/4,height/6);
  uranusVel = createVector(0, 8.87);
  uranusAcc = createVector(0,0);
  uranusMass = 30;
  uranus = new Mover(uranusPos, uranusVel, uranusAcc, uranusMass);
  
  neptunusPos = createVector(width*4/4,height/6);
  neptunusVel = createVector(0, 11.15);
  neptunusAcc = createVector(0,0);
  neptunusMass = 25;
  neptunus= new Mover(neptunusPos, neptunusVel, neptunusAcc, neptunusMass);
}

function draw() {
  
  background(25, 25, 112);
  var gravForce1 = createVector(0, merkurius);
  var gravForce2 = createVector(0, venus);
  var gravForce3 = createVector(0, bumi);
  var gravForce4 = createVector(0, mars);
  var gravForce5 = createVector(0, jupiter);
  var gravForce6 = createVector(0, saturnus);
  var gravForce7 = createVector(0, uranus);
  var gravForce8 = createVector(0, neptunus);
  
  fill(250, 250, 210)
  merkurius.display();
  merkurius.applyForce(gravForce1);
  merkurius.update();
  
  fill(251, 127, 80)
  venus.display();
  venus.applyForce(gravForce2);
  venus.update();
  
  fill(43, 191, 254)
  bumi.display();
  bumi.applyForce(gravForce3);
  bumi.update();
  
  fill(255, 0, 0)
  mars.display();
  mars.applyForce(gravForce1);
  mars.update();
  
  fill(205, 133, 63)
  jupiter.display();
  jupiter.applyForce(gravForce2);
  jupiter.update();
  
  fill(210, 180, 140)
  saturnus.display();
  saturnus.applyForce(gravForce3);
  saturnus.update();
  
  fill(176, 224, 230)
  uranus.display();
  uranus.applyForce(gravForce2);
  uranus.update();
  
  fill(192, 192, 192)
  neptunus.display();
  neptunus.applyForce(gravForce3);
  neptunus.update();
  
  console.log("Kecepatan 1", merkurius.velocity.x, merkurius.velocity.y, "Kecepatan 2", venus.velocity.x, venus.velocity.y, "kecepatan 3", bumi.velocity.x, bumi.velocity.y,"Kecepatan 4", mars.velocity.x, mars.velocity.y, "Kecepatan 5", jupiter.velocity.x, jupiter.velocity.y, "kecepatan 6", saturnus.velocity.x, saturnus.velocity.y, "Kecepatan 7", uranus.velocity.x, uranus.velocity.y, "Kecepatan 8", neptunus.velocity.x, neptunus.velocity.y );
  
  var Cd = 0.05;
  var diam1 = (2*merkurius.mass);var A1 = PI*diam1/2;
  var frictionForce1 = merkurius.velocity.copy();
  frictionForce1.normalize()
  frictionForce1.mult(-1* (frictionForce1.mag()**2) *A1*Cd)
  
  var Cd = 0.01;
  var diam2 = (2*venus.mass)/2;
  var A2 = PI*diam2/2;
  var frictionForce2 = venus.velocity.copy();
  frictionForce2.normalize()
  frictionForce2.mult(-1* (frictionForce2.mag()**2) *A2*Cd)
  
  var Cd = 0.01;
  var diam3 = (2*bumi.mass)/2;
  var A3 = PI*diam2/2;
  var frictionForce3 = bumi.velocity.copy();
  frictionForce3.normalize()
  frictionForce3.mult(-1* (frictionForce3.mag()**2) *A3*Cd)
  
  var Cd = 0.01;
  var diam4 = (2*mars.mass);var A4 = PI*diam4/2;
  var frictionForce4 = mars.velocity.copy();
  frictionForce4.normalize()
  frictionForce4.mult(-1* (frictionForce1.mag()**2) *A4*Cd)
  
  var Cd = 0.01;
  var diam5 = (2*jupiter.mass)/2;
  var A5 = PI*diam5/2;
  var frictionForce5 = jupiter.velocity.copy();
  frictionForce5.normalize()
  frictionForce5.mult(-1* (frictionForce2.mag()**2) *A5*Cd)
  
  var Cd = 0.01;
  var diam6 = (2*saturnus.mass)/2;
  var A6 = PI*diam6/2;
  var frictionForce6 = saturnus.velocity.copy();
  frictionForce6.normalize()
  frictionForce6.mult(-1* (frictionForce3.mag()**2) *A6*Cd)
  
  var Cd = 0.01;
  var diam7 = (2*uranus.mass)/2;
  var A7 = PI*diam7/2;
  var frictionForce7 = uranus.velocity.copy();
  frictionForce7.normalize()
  frictionForce7.mult(-1* (frictionForce2.mag()**2) *A7*Cd)
  
  var Cd = 0.01;
  var diam8 = (2*neptunus.mass)/2;
  var A8 = PI*diam8/2;
  var frictionForce8 = neptunus.velocity.copy();
  frictionForce8.normalize()
  frictionForce8.mult(-1* (frictionForce8.mag()**2) *A8*Cd)
  
}