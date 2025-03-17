document.addEventListener("DOMContentLoaded", () =>{
    loadTasks();
});
function addTask(){
    let taskInput = document.getElementById("taskInput");
    let taskDateTime = document.getElementById("taskDateTime");
    let taskList = document.getElementById("taskList");

    if(taskInput.value.trim() === ""){
        alert("Task cannot be empty!");
        return;
    }

let li = document.createElement("li");
li.innerHTML = `
<span>${taskInput.value} - <small>${taskDateTime.value}</small></span>
<div>
    <button onclick="editTask(this)">Edit</button>
    <button onclick="completeTask(this)">✓</button>
    <button onclick="deleteTask(this)">✗</button>
    </div>
    `;

    taskList.appendChild(li);
    saveTasks();

    taskInput.value = "";
    taskDateTime.value = "";
}

function editTask(button) {
    let li = button.parentElement.parentElement;
    let taskText = li.querySelector("span").innerHTML.split("-")[0];
    let taskDate = li.querySelector("small").innerText;
    let newTask = prompt("Edit Task:", taskText);

    if (newTask !== null && newTask.trim() !== ""){
        li.querySelector("span").innerHTML = `${newTask} - <small>${taskDate}</small>`;
        saveTasks();
    }
}

function completeTask(button){
    let li = button.parentElement.parentElement;
    li.classList.toggle("completed");
    saveTasks();
}
function deleteTask(button){
    let li = button.parentElement.parentElement;
    li.remove();
    saveTasks();
}
function saveTasks(){
    localStorage.setItem("tasks", document.getElementById("taskList").innerHTML);
}
function loadTasks(){
    document.getElementById("taskList").innerHTML = localStorage.getItem("tasks") || "";

document.querySelectorAll("li").forEach(li => {
    li.querySelector("button:nth-child(1)").onclick = function () {editTask(this); };
    li.querySelector("button:nth-child(2)").onclick = function () {completeTask(this);};
    li.querySelector("button:nth-child(3)").onclick = function () {deleteTask(this);};
});
}

