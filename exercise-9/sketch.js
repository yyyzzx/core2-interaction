function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
    translate(0, 25);
  background("aliceblue");
  translate(width / 2, height / 2);
  noStroke();

  fill("powderblue");
  stroke("black");
  strokeWeight(1.5);
  rotate(120);
  arc(0, 0, 200, 200, 30, 270, CHORD);

  fill("lightskyblue");
  rotate(90);
  arc(-92, 45, 60, 70, 40, 260, CHORD);

  fill("lightskyblue");
  rotate(175);
  arc(-85, 50, 70, 60, 40, 270, CHORD);

  fill("lightskyblue");
  rotate(95);
  arc(-85, 50, 70, 70, 40, 270, CHORD);

  fill("powderblue");
  rotate(0);
  arc(0, 0, 200, 200, 30, 270, CHORD);

  fill("white");
  circle(20, 35, 75);

  fill("white");
  circle(-20, -35, 75);

  fill("pink");
  rotate(-30);
  rect(45, -95, 25, 190, 20, 20, 20, 20);

  push();
  translate(0, -25); // Move the origin to the desired position
  rotate(frameCount); // Apply rotation
  fill("black");
  circle(0, 0, 20);
  pop();
  
  push();
  translate(0, 25); // Move the origin to the desired position
  rotate(frameCount); // Apply rotation
  fill("black");
  circle(0, 0, 20);
  pop();
  
  translate(0, -82);
  stroke('mistyrose');
  strokeWeight(4);
  line(56, 0, 56, 165);
}
