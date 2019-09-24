window.onload = () => {
    // const app = document.querySelector("#app");
    // const testDiv = document.createElement("div"); const practiceOne =
    // document.createElement("p"); const practiceTwo = document.createElement("p");
    // practiceOne.innerText = `지정한 숫자만큼 아날로그 초침이 시계 방향으로 설정된 다음     시작 버튼을 누르면 1초마다
    // 시계 반대 방향으로 움직여서     결국 12시 방향을 가르키며 종료되는 아날로그 타이머`; practiceTwo.innerText =
    // `지정한 숫자만큼 타이머가 표시되고     시작 버튼을 누르면 1초씩 줄어들고     0초에서 정지하는 디지털 타이머`;
    // testDiv.append(practiceOne, practiceTwo); app.prepend(testDiv);
    init();
};

var time = 0;
const timer = document.querySelector(".timer");
const start = document.createElement("button");
const plus = document.createElement("button");
const minus = document.createElement("button");
const dgt_clock = document.querySelector(".dgt-clock");

const anlg_clock = document.querySelector(".anlg-clock");


// var cir = document.createElement("cir");
// cir.classList = 'cir';


// anlg_clock.innerHTML = "";







dgt_clock.innerHTML = `${
	time < 10 ? `0${time}` : time}`;





start.classList.add("start");
plus.classList.add("plus");
minus.classList.add("minus");
plus.innerText = "+";
minus.innerText = "-";
start.innerText = "start";
timer.innerHTML = "";
timer.append(minus, start, plus);


function minusButton(event){
	if(time > 0){
		time--;
		dgt_clock.innerHTML = `${
			time < 10 ? `0${time}` : time
		}`;		
	}
	

} 

function plusButton(event){
	if(time<60){
		
		dgt_clock.innerHTML = `${
			time<10 ? `0${time}` : time
		}`;
		time++;

	}
	
	else if(time===60){
		time = 0;
		time++;
		dgt_clock.innerHTML = `${
			time<10 ? `0${time}` : time
		}`;
	}

}


function startButton(event){

plus.disabled =true;
minus.disabled = true;
start.disabled = true;



	var startbtn = setInterval(function(){

		if(time>0){
			time--;
			dgt_clock.innerHTML = `${
				time < 10 ? `0${time}` : time
			}`
		}
		else{
			clearInterval(startbtn);
			plus.disabled =false;
			minus.disabled =false;
			start.disabled =false;

		}





		}, 1000)


}

plus.addEventListener("click", plusButton)
minus.addEventListener("click", minusButton)
start.addEventListener("click",startButton)


function init(){
	minusButton();
	plusButton();
	startButton();
	

}

// init();