const canvas = document.getElementById("canvas");
let seek = 0;
let jump_distance = 0;
let device_width = window.innerWidth;

const audio = new Audio('./media/lofi.mp3');
let duration;
canvas.addEventListener('click', e=>jump(e));
window.addEventListener('click', ()=>device_width=innerWidth)

function jump(e) {
    seek = e.x;
    jump_distance = (seek * 100) / device_width;
    audio.currentTime = (duration * jump_distance) / 100;
}

function loadCanvas() {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    duration = audio.seekable.end(0);

    // Draw graph

    let width = window.innerWidth;
    const height = 200;
    canvas.width = width-32;
    canvas.height = height;

    ctx.fillStyle = "#dbdbdb";

    let min = Math.ceil(30);
    let max = Math.floor(100);

    for (let i = 0; i < (width/2)-16; i++){
        ctx.fillRect(i+i, Math.floor(Math.random()*(max-min)+min), 5, 100)
        i +=3;
    }
}

const play_btn = document.getElementById('play');
const pause_btn = document.getElementById('pause');

function play() {
    pause_btn.style.display = "block"
    play_btn.style.display = "none"
    audio.play();
}
function pause() {
    play_btn.style.display="block"
    pause_btn.style.display = "none"
    audio.pause();
    
    const audio_current = audio.currentTime;
    console.log(`Current : ${audio_current}`);
}

//008D9A

//attribute
//icons - https://www.flaticon.com/
//play - By Webalys
//pause - By Kiranshastry
//vol - By Dave Gandy
// fast -  By inkubators
