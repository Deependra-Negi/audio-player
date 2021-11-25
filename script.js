const canvas = document.getElementById("canvas");
let device_width = window.innerWidth;

const audio = new Audio('./media/audio.mp3');
let duration;
canvas.addEventListener('click', e=>jump(e));
window.addEventListener('click', ()=>device_width=innerWidth)

function jump(e) {
    let seek = e.x;
    let jump_distance = (seek * 100) / device_width;
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

    for (let i = 0; i < (width/2)-16; i++){
        ctx.fillRect(i+i, Math.floor(Math.random()*(100-30)+30), 5, 100)
        i +=3;
    }
}

// Buttons functionality
const play_btn = document.getElementById('play');
const pause_btn = document.getElementById('pause');
const vol_btn = document.getElementById('volume');

function play() {
    pause_btn.style.display = "block"
    play_btn.style.display = "none"
    audio.play();
}

function pause() {
    play_btn.style.display="block"
    pause_btn.style.display = "none"
    audio.pause();
}

let volume_state = true;
function handleVolume() {
    volume_state = !volume_state;
    volume_state ? (vol_btn.style.backgroundImage = 'url(./media/icons/volume.png)') && (audio.muted = false) : (vol_btn.style.backgroundImage = 'url(./media/icons/mute.png)') && (audio.muted = true);
}

function fastForward() {
    audio.currentTime = audio.currentTime + 10;
}

//008D9A

//attribute
//icons - https://www.flaticon.com/
//play - By Webalys
//pause - By Kiranshastry
//vol - By Dave Gandy
// fast -  By inkubators
//mute - freepik
