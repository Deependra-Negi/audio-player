function loadCanvas() {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    // Draw graph

    let width = window.innerWidth;
    const height = 200;
    canvas.width = width;
    canvas.height = height;

    // ctx.fillStyle = "#f9f9f9";
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#dbdbdb";
    let min = Math.ceil(30);
    let max = Math.floor(100);

    let arr = Array.from({ length: width }, () => Math.floor(Math.random() * (max-min)+min));
    for (let i = 0; i < arr.length; i += 8){
        arr[i] = -arr[i];
        i++;
    }
    console.log(arr)
    for (let i = 0; i < arr.length; i++){
        ctx.fillRect(i, (arr[i]<0 && arr[i]<-30) ? 100-(Math.ceil(Math.random()*30)) : 100, 5, -arr[i])
        i += 5;
    }
    canvas.fillStyle = "green"   
}