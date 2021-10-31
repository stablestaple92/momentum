const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// uppercase variables : Strings that don't make any problems
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 로그인 form 입력 제어
function onLoginSubmit(event){
    event.preventDefault(); // 해당 event의 기본적 동작을 제한하기
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

// 인삿말 출력
function paintGreetings(username){
    greeting.innerText = `Hello! ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


// local storage 확인
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    // submit을 할 때 value를 가져오는 건 좋지만 새로고침을 동시에 하는 것을 막기
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    paintGreetings(savedUsername);
}