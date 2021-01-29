function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
  
}

function draw() {
  background(0);  
  translate(200,200);
  rotate(-90)

  hr=hour();
  mn=minute();
  sc=second();

  strokeWeight(8)
  noFill()

  //seconds
  stroke(255,100,150);
  end1=map(sc,0,60,0,360)
  arc(0,0,300,300,0,end1);
  push();
  strokeWeight(6)
  rotate(end1);
  line(0,0,100,0);
  pop();

  //minutes
  stroke(150,100,255);
  end2=map(mn,0,60,0,360)
  arc(0,0,280,280,0,end2)
  push();
  strokeWeight(6)
  rotate(end2);
  line(0,0,80,0);
  pop();

  //hours
  stroke(150,255,100);
  end3=map(hr % 12,0,12,0,360)
  arc(0,0,260,260,0,end3)
  push();
  strokeWeight(6)
  rotate(end3);
  line(0,0,60,0);
  pop();

  //strokeWeight(8);
  //stroke(255);
  //noFill();
  //ellipse(200,200,300,300);

  
  //noStroke();
 // text(hr+':'+mn+':'+sc,10,200);

  drawSprites();
}