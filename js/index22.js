        // document 안에 header id를 가진 객체를 myHeader라는 변수로 지정한다.
        let myHeader = document.getElementById("header");

        // 마우스 이벤트
        console.log(myHeader);
        // document 안에 header id를 가진 객체에 마우스 호버했을 때, 기능을 실행한다.
        myHeader.onmouseover = function () {
            // this = 이벤트가 걸린 객체(여기서는 myHeader), 이를 활용해서 코드를 깔끔하게 쓸 수 있다.
            console.log(this);
            // console.log(this); = console.log(myHeader); 의미는 같다. 
            this.classList.add("over");

        }
        console.log(document.getElementById("header"));
        // document 안에 header id를 가진 객체에 마우스 아웃했을 때, 기능을 실행한다.
        document.getElementById("header").onmouseout = function () {
            // 콘솔창에 "마우스 아웃" 출력
            this.classList.remove("over");
        }
        // 스크롤 이벤트
        // window가 스크롤 이벤트를 받는다. 스크롤 이벤트가 발생하면 기능을 실행한다. 
        window.addEventListener("scroll", function () {
            // 콘솔창에 window의 스크롤 Y값을 출력한다.
            console.log(window.scrollY);
            // 만약 window의 스크롤 Y값이 200보다 커지면
            if (window.scrollY > 0) {
                myHeader.classList.add("down");
                myHeader.classList.remove("up");
            } else {
                myHeader.style.height = 100 + "px";
                myHeader.classList.add("up");
                myHeader.classList.remove("down");

            }
        });