let diameter = 50;
let baseSize = 40;
let angle = 0;
let circles = [];

function setup() {
    createCanvas(800, 600);

    //allows the 4 circles to move and have random velocities
    for (let i = 0; i < 4; i++) {
        circles.push({
            x: random(100, 700),
            y: random(100, 500),
            dx: random(-3, 3),
            dy: random(-3, 3)
        });
    }
}

function draw() {
    background(200);

    // Title that changes size
    angle += 0.05;
    let titleSize = baseSize + Math.sin(angle) * 5;
    textAlign(CENTER, CENTER);
    textSize(titleSize);
    text("Circles", width / 2, height / 4);
   fill(0, 0, 0)

    // Draws circles
    for (let c of circles) {
        fill(123, 39, 21); // Red color
        circle(c.x, c.y, diameter);
        fill(255);
        circle(c.x, c.y, 25);

        //lets circles bounce off walls
        c.x += c.dx;
        c.y += c.dy;
        if (c.x <= diameter / 2 || c.x >= width - diameter / 2) c.dx *= -1;
        if (c.y <= diameter / 2 || c.y >= height - diameter / 2) c.dy *= -1;
    }
}


