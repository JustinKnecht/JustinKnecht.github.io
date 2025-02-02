const canvas = document.getElementById("canv", "canv2");
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
        ctx.fillStyle = `rgba(255, 255, 255, .5)`;
        ctx.fillRect(x, y, size, size);
    }
}
//initialize with 2 squares
makeRandomSquares(50);

function runIt() {
        ctx.animate({ opacity: '+=1' }, 1000);
        ctx.animate({ opacity: '-=0.5' }, 1000, runIt);
}
runIt();

// $(document).ready(function () {
//     var height = Math.max(document.body.scrollHeight, document.body.offsetHeight,
//         document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
//     for (i = 0; i < 500; i++) {
//         var randClass = Math.floor(Math.random() * 10);
//         var randLeft = Math.floor(Math.random() * document.body.clientWidth);
//         var randTop = Math.floor(Math.random() * height);
//         $('body').append('<div class="star f' + randClass + '" style="top:' + randTop + 'px;left:' + randLeft + 'px;"></div>');

//     }
// });