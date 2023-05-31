// 헤더 들어갔다가 나오는 모션
let myHeader = document.querySelector("#header");

window.addEventListener("scroll", function () {
    console.log(window.scrollY);

    if (scrollY > 150) {
        console.log("150 이상");
        myHeader.style.height = 0;
        myHeader.style.dispaly = "none";
        myHeader.style.top = -100 + "px";
    }
    else {
        console.log("150 이하");
        myHeader.style.height = 100 + "px";
        myHeader.style.dispaly = "none";
        myHeader.style.top = 0;
    }
})


// 버튼 클릭 시 화면 맨 위로 이동하는 이벤트 스크립트

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

var button = document.querySelector("#top");
button.addEventListener("click", scrollToTop);


// 약 펼치는 기능

let isDrugExecuted = false;

window.addEventListener("scroll", function () {
    console.log(scrollY);


    if (scrollY > 13355 && !isDrugExecuted) {
        console.log("약기능 실행");
        drug()
        isDrugExecuted = true;
    }
})

function drug() {
    let drug1 = document.getElementById("drug1");
    let drug2 = document.getElementById("drug2");
    let drug3 = document.getElementById("drug3");
    let drug4 = document.getElementById("drug4");
    let drug5 = document.getElementById("drug5");
    let drug6 = document.getElementById("drug6");
    let drug7 = document.getElementById("drug7");

    let i = 45;
    let p = 45;

    let drugimg1 = setInterval(function () {
        p -= 0.5;
        drug1.style.left = p + "%";

        if (p <= 0) {
            clearInterval(drugimg1);
        }
    }, 30)

    let drugimg2 = setInterval(function () {
        p -= 0.5;
        drug2.style.left = p + "%";

        if (p <= 15) {
            clearInterval(drugimg2);
        }
    }, 30)
    let drugimg3 = setInterval(function () {
        p -= 0.5;
        drug3.style.left = p + "%";

        if (p <= 30) {
            clearInterval(drugimg3);
        }
    }, 30)


    let drugimg5 = setInterval(function () {
        i += 0.5;
        drug5.style.left = i + "%";

        if (i >= 60) {
            clearInterval(drugimg5);
        }
    }, 30)

    let drugimg6 = setInterval(function () {
        i += 0.5;
        drug6.style.left = i + "%";

        if (i >= 75) {
            clearInterval(drugimg6);
        }
    }, 30)

    let drugimg7 = setInterval(function () {
        i += 0.5;
        drug7.style.left = i + "%";

        if (i >= 90) {
            clearInterval(drugimg7);
        }
    }, 30)

}