// QuerySelector
const clock = document.querySelector("#clock");

// 시간 출력 메소드
function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");;
    const seconds = String(date.getSeconds()).padStart(2,"0");;

    clock.innerText = (`${hours}:${minutes}:${seconds}`);
}

// 초기값 - setInterval만 두면 1초 뒤에 시계를 볼 수 있기 때문에
getClock();

// 1초(5000ms)마다 getClock 함수 실행
setInterval(getClock, 1000);