const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");


function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours <10 ? `${hours}` : hours }:${
        minutes<10 ? `0${minutes}` : minutes}:${
        seconds <10 ? `0${seconds}` : seconds }`;   
}



function init() {

getTime();
setInterval(getTime, 1000);

}


// setInterval(1,2) 
// 1은 실행하고자하는 함수 2는 실행시간.
init();