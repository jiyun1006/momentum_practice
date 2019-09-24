const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    // 남아있게 해주는 기능.

    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);

    //input 창에 class 를 만든다.

    form.addEventListener("submit", handleSubmit)
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    // 이름이 입력되었으면 input창을 없애버리고,

    greeting.classList.add(SHOWING_CN);

    //greeting 창을 만든다.


    greeting.innerText = `Hello ${text}`;

}


function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();

    }
     else {
        paintGreeting(currentUser);
     }

}




function init() {
    loadName();
}
init();