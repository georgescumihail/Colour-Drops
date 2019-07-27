
var canvas = document.getElementById("main");
var context = canvas.getContext("2d");
var drops = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.addEventListener("click", create);

run();

function run() {

    context.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < drops.length; i++) {
        draw(drops[i].x, drops[i].y, drops[i].colour);
        if (drops[i].speed < 5) {
            drops[i].speed = drops[i].speed * 1.015;
        }
    }

    for (var i = 0; i < drops.length; i++) {
        drops[i].y += drops[i].speed;

    }
    setTimeout(function () {
        requestAnimationFrame(run);
    }, 1000 / 100);

}

function create(event) {

    xpos = event.clientX;
    ypos = event.clientY;
    var drop = {
        x: 0,
        y: 0,
        speed: 1,
        colour: getRandColour()
    };
    drop.x = xpos;
    drop.y = ypos;
    drops.push(drop);

}

function draw(x, y, col) {


    context.fillStyle = col;
    context.beginPath();
    context.arc(x, y, 5, 0, 2 * Math.PI);
    context.fill();
}

function getRandColour() {

    var randArray = "0123456789ABCDEF";
    var colour = "#";
    for (var i = 0; i < 6; i++) {
        colour += randArray[Math.floor(Math.random() * 16)];
    }
    console.log(colour);
    return colour;
}