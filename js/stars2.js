const canvas = document.getElementById("canv2");
const ctx = canvas.getContext("2d");
const width = window.innerWidth;
const height = window.innerHeight;
const maxWH = Math.max(width, height);

//use resize event listener to change these on window resize...
canvas.width = width;
canvas.height = height;

//to generate random intergers from 0 to 255, for colour channels
function randomInteger(max = 256) {
    return Math.floor(Math.random() * max);
}
//draw n squares at random places and sizes
function makeRandomSquares(n) {
    for (let i = 0; i < n; i++) {
        const size = Math.random() * (maxWH * 0.005);
        //minus half the size from x,y
        //so they can overlap left and top of screen, not just bottom and right.
        const x = Math.random() * width - size / 2;
        const y = Math.random() * height - size / 2;
        //random rgba colour
        ctx.fillStyle = `rgba(255, 255, 255, 255)`;
        ctx.fillRect(x, y, size, size);
    }
}
//initialize with 2 squares
makeRandomSquares(50);