const todoForm = document.querySelector(".js-toDoForm"),
    todoInput = todoForm.querySelector("input"),
    todoList = document.querySelector(".js-toDoList");

const TODOS_LIST = "toDos";

let toDos =[];


function deleteTodo(event){

    const btn = event.target;
    const li = btn.parentNode;
    todoList.removeChild(li);
    const cleantoDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleantoDos;
    saveTodo();
 

    

}


function paintTodo(text){

    const li = document.createElement("li");
    const delbtn = document.createElement("button");
    delbtn.innerText ="❌";
    delbtn.addEventListener("click", deleteTodo);
    const span = document.createElement("span");
    span.innerText = text;
    const newId = toDos.length +1;
//  구분하기 위한 id 설정.

    li.appendChild(span);
    li.appendChild(delbtn);
    li.id = newId;
    todoList.appendChild(li);
    const obj ={
        text : text,
        id : newId

    };
//localstorage 에 저장하기 위한 코드.

    toDos.push(obj);
    saveTodo();


}



function handleSubmit(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    paintTodo(currentValue);
    todoInput.value = "";  

}

function loadTodo(){
    const loadedtoDos = localStorage.getItem(TODOS_LIST);
    if(toDos !== null){
        
        const parsedtoDos = JSON.parse(loadedtoDos);
        parsedtoDos.forEach(function(toDo){
            paintTodo(toDo.text);
        })
        
    
    }

}


function saveTodo(){
    localStorage.setItem(TODOS_LIST, JSON.stringify(toDos));
}


function init(){
    loadTodo();
    todoForm.addEventListener("submit", handleSubmit);

}

init();