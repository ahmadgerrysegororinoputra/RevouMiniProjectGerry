// Temporarry storage for todo items
let todos = [];

function addTodo() {
    const todoInput = document.getElementById("todo-input");
    const todoDate = document.getElementById("todo-date");

    console.log("Input:", todoInput.value);
    console.log("Date:", todoDate.value);

    // Validation
    if (todoInput.value === '' || todoDate.value === '') {
        alert("Please fill in both fields.");
    } else {
        // Add todo items to the list
        todos.push({ text: todoInput.value, date: todoDate.value, });
        todoInput.value = '';
        todoDate.value = '';

        renderTodos();
    }
}

// Function to render todo items to the DOM
function renderTodos() {
    // Get the todo list container 
    const todoList = document.getElementById('todo-list');

    // Clear existing list
    todoList.innerHTML = '';

    // Render each todo item
    todos.forEach((todo, _) => {
        todoList.innerHTML += `
        <li>
            <p class="text-2xl">${todo.text} <span class="text-sm text-gray-500">${todo.date} </span></p>
            <hr />
        </li>`;   
    });
}