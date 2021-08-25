const canvasRef = document.querySelector('canvas');
const clearBtn = document.querySelector("#clear");
const ctx = canvasRef.getContext("2d");

// Make our in-memory canvas
const offCanvas = document.createElement('canvas');
const offCtx = offCanvas.getContext('2d');

let hue = 0;
let isMax = false;
canvasRef.height = window.innerHeight;
canvasRef.width = window.innerWidth;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';

let position = {drawable: false, X:0, Y:0};

const initDraw = (e) => {
    position = {drawable: true, X: e.offsetX, Y: e.offsetY};
}

const draw = (e) => {
    if(!position.drawable) return;

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    // draw 될 때마다 색깔 변경을 위해서 해당 공간에서 beginPath();
    ctx.beginPath();
    ctx.moveTo(position.X, position.Y);

    position = {...position, X: e.offsetX, Y: e.offsetY};
    ctx.lineTo(position.X, position.Y);
    ctx.stroke();

    hue++;
    if(ctx.lineWidth > 100 || ctx.lineWidth <= 1) isMax = !isMax;

    if(!isMax) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
}

const finishDraw = (e) => {
    position = {drawable: false, X: e.offsetX, Y: e.offsetY};
    ctx.closePath();
}

const clear = (e) => {

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    resetProperty();
}

const resetProperty = () => {
    ctx.lineWidth = 1;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    hue = 0;
}

clearBtn.addEventListener('click', clear);
canvasRef.addEventListener('mousedown', initDraw);
canvasRef.addEventListener('mousemove', draw);
canvasRef.addEventListener('mouseup', finishDraw);
canvasRef.addEventListener('mouseout', finishDraw);


function debounce(func, time = 100){
    let timer;
    return function(){
        if(timer) clearTimeout(timer);
        timer = setTimeout(func, time);
    };
}

function resizeCanvas() {
    console.log(`resize Canvas`);

    // copy
    offCanvas.width = canvasRef.width;
    offCanvas.height = canvasRef.height;
    offCtx.drawImage(canvasRef, 0, 0);


    canvasRef.width = window.innerWidth;
    canvasRef.height = window.innerHeight;

    //paste
    ctx.drawImage(offCanvas, 0, 0);

    resetProperty();
}

window.addEventListener("resize", debounce(resizeCanvas, 200));