function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}

function draw() {
    background(0);
    translate(200, 200);
    rotate(-90);
    let hr = hour();
    let mn = minute();
    let sc = second();

    // fill(255);
    // noStroke();
    // text(hr + ':' + mn + ':' + sc, 10, 200);

    // strokeWeight(4);
    // stroke(255);
    // noFill();
    // ellipse(200, 200, 300, 300);

    strokeWeight(8);
    stroke(255, 100, 150);
    noFill();
    let secondAngle = map(sc, 0, 60, 0, 360);
    // arc(0, 0, 300, 300, 0, secondAngle);

    stroke(255, 100, 255);
    let minuteAngle = map(mn, 0, 60, 0, 360);
    // arc(0, 0, 280, 280, 0, minuteAngle);

    stroke(255, 255, 100);
    let hourAngle = map(hr % 12, 0, 12, 0, 360);
    // arc(0, 0, 260, 260, 0, hourAngle);

    push();
    rotate(secondAngle);
    stroke(255, 100, 150);
    line(0,0, 100, 0);
    pop();

    push();
    rotate(minuteAngle);
    stroke(255, 100, 255);
    line(0,0, 90, 0);
    pop();

    push();
    rotate(hourAngle);
    stroke(255, 255, 100);
    line(0,0, 80, 0);
    pop();

    stroke(255);
    point(0, 0);

} 