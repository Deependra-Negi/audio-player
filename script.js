
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// Draw graph

let width = window.innerWidth;
const height = 200;
canvas.width = width;
canvas.height = height;

ctx.fillStyle = "pink";

let arr = Array.from({ length: width }, () => Math.floor(Math.random() * 100));
for (let i = 0; i < arr.length; i += 9){
    arr[i] = -arr[i];
    i++;
}
console.log(arr)
for (let i = 0; i < arr.length; i++){
    ctx.fillRect(i, 100, 5, -arr[i])
    i += 5;
}
canvas.fillStyle = "green"