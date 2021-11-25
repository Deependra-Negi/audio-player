// window.addEventListener('resize', function(event){
//     // console.log(window.innerWidth)
//     loadCanvas();
// });

document.getElementById("canvas").addEventListener('click', e => console.log(e.x))
window.addEventListener('click', e => console.log(innerWidth))

function loadCanvas() {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    // Draw graph

    let width = window.innerWidth;
    const height = 200;
    canvas.width = width-32;
    canvas.height = height;

    // ctx.fillStyle = "#f9f9f9";
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#dbdbdb";

    let min = Math.ceil(30);
    let max = Math.floor(100);

    for (let i = 0; i < (width/2)-16; i++){
        ctx.fillRect(i+i, Math.floor(Math.random()*(max-min)+min), 5, 100)
        i +=2.5;
    }  
}