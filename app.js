const todoList = [];

const pendingClasses = "bg-purple-300 w-full text-center text-red-800 rounded py-4 border-2 border-purple-500 transition transform ease-in-out duration-200 hover:bg-purple-200 hover:text-black hover:scale-100 hover:-rotate-2 cursor-pointer"

const completedClasses = "bg-green-200 w-full text-center text-blue-800 rounded py-4 border-2 border-green-500 transition transform ease-in-out duration-200 hover:bg-green-100 hover:text-black hover:scale-100 hover:-rotate-2 cursor-pointer"

const pendingList = document.getElementById('pendingList');

const completedList = document.getElementById('completedList');

const showTodoList = () => {



const pendingTodos = todoList.filter((todo) => todo.status === "pending");

pendingList.innerHTML = "";

pendingTodos.forEach((todo)=>{const pendingItem = document.createElement('li')
pendingItem.className = pendingClasses;
pendingItem.innerText = todo.text
pendingItem.id = todo.id;
pendingList.appendChild(pendingItem)
});



const completedTodos = todoList.filter((todo) => todo.status === "done");

completedList.innerText = "";

completedTodos.forEach((todo)=>{const completedItem = document.createElement('li')
completedItem.className = completedClasses;
completedItem.innerText = todo.text
completedItem.id = todo.id;
completedList.appendChild(completedItem)
});
};


const addForm = document.getElementById("addForm");
const enterText = document.getElementById("enterText");

addForm.addEventListener("submit", event=>{
    event.preventDefault();
    todoList.push({
    id: Math.floor(Math.random() * 100000).toString(),
    text: enterText.value,
    status:"pending",
});
enterText.value = "";
showTodoList();
});

pendingList.addEventListener("click",(event)=>{
    todoList.find(todo => todo.id === event.target.id).status = "done";
    showTodoList();
});

completedList.addEventListener("click",(event)=>{
    todoList.find(todo => todo.id === event.target.id).status = "pending";
    showTodoList();
});