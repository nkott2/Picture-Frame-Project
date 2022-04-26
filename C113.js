function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,0,0,640, 480);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 100);
    circle(590, 427, 100);
    circle(50, 427, 100);
    circle(590, 50, 100);
    fill(0, 128, 0);
    stroke(0, 128, 0)
    rect(100, 20, 439, 60);
    rect(100, 400, 439, 60);
    rect(22, 100, 60, 277);
    rect(560, 100, 60, 277);
}

function take_snapshot() {
    save('student_name.png')
}


