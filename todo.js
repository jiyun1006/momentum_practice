const todoForm = document.querySelector(".js-toDoForm"),
    todoInput = todoForm.querySelector("input"),
    todoList = document.querySelector(".js-toDoList");

const TODOS_LS = "todos";


let toDos = [];

function deletetoDo(event){
   const btn = event.target;
   const li = btn.parentNode;
    todoList.removeChild(li);
    const cleantoDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleantoDos;
    // toDos가 예전의 것이라서 cleantoDos로 교체.
    savetoDos();


}    

function savetoDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}



function paintTodo(text){
    const li = document.createElement("li");
    const delbtn = document.createElement("button");
    delbtn.innerText = "❌";
    delbtn.addEventListener("click", deletetoDo);
    const span =document.createElement("span");
    span.innerText = text;
    const newId = toDos.length +1;
    li.appendChild(span);
    li.appendChild(delbtn);
    li.id = newId;
    todoList.appendChild(li);
    const todoObj = {
        text : text ,
        id : newId
    }
    toDos.push(todoObj);
    savetoDos();

}


function handleSubmit(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    paintTodo(currentValue);
    todoInput.value = "";

}

function loadTodos(){
    const loadedtoDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){
        const parsedtoDos = JSON.parse(loadedtoDos);

        parsedtoDos.forEach(function(toDo){

            paintTodo(toDo.text);

        })
        

    }

}


function init(){

    loadTodos();
    todoForm.addEventListener("submit", handleSubmit);
}

init();
