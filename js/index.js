//bg13 script

const scrollPos = window.scrollY;
console.log(scrollPos);

let element = document.getElementById("bg13_text");
let opacity = 0;
let scalePos = 0.5;

let timer = setInterval(function () {
    opacity += 0.1;
    scalePos += 0.045;

    element.style.opacity = opacity;
    element.style.transform = `scale(${scalePos}, ${scalePos})`;


    if (opacity >= 1) {
        clearInterval(timer);
    }


}, 100);