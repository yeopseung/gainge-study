// const
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// QuerySelector
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

// Callback Method - loginForm Submit 
function onLoginSubmit(event) { 
    // form은 기본적으로 Submit 이벤트 발생 시 새로고침을 수행
    // 불필요한 새로고침을 막기위해 다음과 같이 기본적인 수행을 막는 메소드 호출
    event.preventDefault();
    console.log(event);

    // username을 불러옴
    const username = loginInput.value;

    // Local Storage에 저장
    localStorage.setItem(USERNAME_KEY, username);
     
    // 제출 완료 시 숨김 처리 (css class인 hidden을 추가하여)
    loginForm.classList.add(HIDDEN_CLASSNAME);

    // greeting에 저장한 username 표시
    paintGreetings();
};

// Method
function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    // username을 greeting에 표시
    greeting.innerText = `Hello ${username}`;
    // greeting 숨김 처리 해제
    greeting.classList.remove(HIDDEN_CLASSNAME); 
}

// LocalStorage
const savedUsername = localStorage.getItem(USERNAME_KEY);

// 저장되어 있는 username이 없는 경우
if(savedUsername === null){
    // loginForm 숨김 처리 해제
    loginForm.classList.remove(HIDDEN_CLASSNAME);

    // Submit 이벤트 리스너 추가 (Tip. onLoginSubmit() 바로 실행, onLoginSubmit 콜백 메소드)
    loginForm.addEventListener("submit", onLoginSubmit);
}
// 저장되어 있는 username이 있는 경우
else{
    paintGreetings();
}