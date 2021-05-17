


let h1 = document.getElementsByTagName("h1")[0];
let cursor_item = document.getElementsByClassName("cursor_item")[0];

// console.log(document.getElementsByTagName("h1"));
// console.log(document.getElementsByTagName("h1")[0]);
// console.log(document.getElementsByTagName("h1")[1]);
// console.log(document.getElementsByTagName("h1")[0].innerHTML);

window.addEventListener('mousemove', mousefunc, false);
window.addEventListener('click', mousefunc2, false);

let x = 0;
let y = 0;
let mouseX = 0;
let mouseY = 0;
let speed = 0.03;
    
function mousefunc(e){
    x = e.clientX;
    y = e.clientY;
    h1.innerHTML = " X값의 좌표 " + x + " Y값의 좌표 " + y
}

function mousefunc2(e){
    x = e.clientX;
    y = e.clientY;
    h1.innerHTML = " X값의 좌표 " + x + " Y값의 좌표 " + y
}



loop();

function loop(){
    mouseX += (x - mouseX) * speed;
    mouseY += (y - mouseY) * speed;
    window.requestAnimationFrame(loop);
    cursor_item.style.transform = `translate(${x}px, ${y}px)`;
}