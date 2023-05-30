// user_section script
// let box1 = document.getElementById("user_box1");
// let box2 = document.getElementById("user_box2");
// let box3 = document.getElementById("user_box3");

// user_section script end

// function3_section script
// let test1 = documnet.getElementById("drug1")
// let pos = -23 + "%";

// let drug = setInterval(function(){
//     pos -= 1;
//     test1.style.left = pos + "%";

// },100);
// function3_section script end

// service_section script
let element = document.getElementById("service_section_text");
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


}, 85);
// service_section script end
