// 헤더 들어갔다가 나오는 모션
let myHeader = document.querySelector("#header");

window.addEventListener("scroll", function () {
    console.log(window.scrollY);

    if (scrollY > 150) {
        console.log("150 이상");
        myHeader.style.height = 60 + "px";
        myHeader.style.top = -55 + "px";

        myHeader.onmouseover = function () {
            myHeader.style.height = 60 + "px";
            myHeader.style.top = 0;
        }

        myHeader.onmouseout = function () {
            myHeader.style.height = 60 + "px";
            myHeader.style.top = -55 + "px";
        }
    }
    else {
        console.log("150 이하");
        myHeader.style.height = 60 + "px";
        myHeader.style.top = 0;

        myHeader.onmouseout = null;
        myHeader.onmouseover = null;
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

    let mockup = document.querySelector(".drug_mockup");
    let intersectionObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting && !isDrugExecuted) {
                drug()
                isDrugExecuted = true;
            }
        });
    });
    intersectionObserver.observe(mockup);

})

function drug() {
    let drug1 = document.getElementById("drug1");
    let drug2 = document.getElementById("drug2");
    let drug3 = document.getElementById("drug3");
    let drug5 = document.getElementById("drug5");
    let drug6 = document.getElementById("drug6");
    let drug7 = document.getElementById("drug7");

    let pos = 44;
    let pos2 = 44;

    let drugimg1 = setInterval(function () {
        pos -= 0.5;
        drug1.style.left = pos + "%";

        if (pos <= 8) {
            clearInterval(drugimg1);
        }
    }, 30)

    let drugimg2 = setInterval(function () {
        pos -= 0.5;
        drug2.style.left = pos + "%";

        if (pos <= 20) {
            clearInterval(drugimg2);
        }
    }, 30)
    let drugimg3 = setInterval(function () {
        pos -= 0.5;
        drug3.style.left = pos + "%";

        if (pos <= 32) {
            clearInterval(drugimg3);
        }
    }, 30)


    let drugimg5 = setInterval(function () {
        pos2 += 0.5;
        drug5.style.left = pos2 + "%";

        if (pos2 >= 56) {
            clearInterval(drugimg5);
        }
    }, 30)

    let drugimg6 = setInterval(function () {
        pos2 += 0.5;
        drug6.style.left = pos2 + "%";

        if (pos2 >= 68) {
            clearInterval(drugimg6);
        }
    }, 30)

    let drugimg7 = setInterval(function () {
        pos2 += 0.5;
        drug7.style.left = pos2 + "%";

        if (pos2 >= 80) {
            clearInterval(drugimg7);
        }
    }, 30)

}

// 네비 클릭 시 이동하는 코드
let menu1 = document.querySelector("#nav1");
let menu2 = document.querySelector("#nav2");
let menu3 = document.querySelector("#nav3");
let menu4 = document.querySelector("#nav4");

let GoalSection = document.querySelector("#project");
let GoalSectionOffsetTop = GoalSection.offsetTop;
let DesignSection = document.querySelector("#design"); 
let DesignSectionOffsetTop = DesignSection.offsetTop;
let FunctionSection = document.querySelector("#function1");
let FunctionSectionOffsetTop = FunctionSection.offsetTop;
let ContactSection = document.querySelector("#footer"); 
let ContactSectionOffsetTop = ContactSection.offsetTop;

function ScrollGoalSection(){
    window.scrollTo({
        top : GoalSectionOffsetTop,
        behavior : "smooth"
    });
}

function ScrollDesignSection(){
    window.scrollTo({
        top : DesignSectionOffsetTop,
        behavior : "smooth"
    });
}

function ScrollFunctionSection(){
    window.scrollTo({
        top : FunctionSectionOffsetTop,
        behavior : "smooth"
    });
}

function ScrollContactSection(){
    window.scrollTo({
        top : ContactSectionOffsetTop,
        behavior : "smooth"
    });
}

menu1.addEventListener("click", ScrollGoalSection);
menu2.addEventListener("click", ScrollDesignSection);
menu3.addEventListener("click", ScrollFunctionSection);
menu4.addEventListener("click", ScrollContactSection);



// === with === 

window.addEventListener('scroll', function () {
    let section = document.getElementById('with');
    let scrollPercentage = (section.getBoundingClientRect().top / window.innerHeight) * 100;

    if (scrollPercentage > 25) {
        section.style.backgroundColor = '#FFF';
    } else {
        section.style.backgroundColor = '#FFDF64';
    }
});

