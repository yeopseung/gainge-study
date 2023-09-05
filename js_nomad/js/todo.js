const TODOS_KEY = "todos";
let toDos = [];

// QuerySelector
const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// To Do를 toDoList에 그려내는 메소드
function paintToDo(newTodo){
    // <li>, <span>, <button> 태그 생성
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    // id 설정
    li.id = newTodo.id;

    // <span> 태그에 입력값 저장
    span.innerText = newTodo.text;

    // <button> 태그에 X 텍스트 추가
    button.innerText = "X";

    // Add EventListener - Click
    button.addEventListener("click",deleteToDo);

    // <li>의 child로 <span>, <button> 추가
    li.appendChild(span);
    li.appendChild(button);

    // <ul> 리스트에 <li> 추가
    toDoList.appendChild(li);
}

// To Do 삭제 메소드 - Click Event Callback Method
function deleteToDo(event){
    const li = event.target.parentElement;
    const id = parseInt(li.id);

    toDos = toDos.filter(element => element.id !== id);
    saveToDos();

    li.remove();
}
 
// To Do 저장 메소드 - Submit Event Callback Method
function handleToDoSubmit(event){
    event.preventDefault();

    // 입력값 저장 및 초기화
    const newTodo = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };

    // 배열에 To Do 저장
    toDos.push(newTodoObj);

    paintToDo(newTodoObj);

    saveToDos();
}

// Add EventListener - Submit
toDoForm.addEventListener("submit",handleToDoSubmit);

// Local Storage에서 String 형태의 To Do List를 가져옴
const savedToDos = localStorage.getItem(TODOS_KEY);

// Local Storage에 이미 저장된 To Do 가 있을 경우
if(savedToDos !== null){
    // Stirng -> Array
    const parsedToDos = JSON.parse(savedToDos);

    // 저장
    toDos = parsedToDos;

    // 각 요소를 그려냄
    parsedToDos.forEach(element => {
        paintToDo(element);
    });
}