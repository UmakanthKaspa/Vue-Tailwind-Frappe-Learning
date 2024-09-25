const todos = [];
const form = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // formData = new FormData(form);
    // todo = formData.get("todo");
    const todo = form.todo.value.trim();

    if (todo) {
        todos.push(todo);
        renderTodos();
        form.reset();
    }
});

function renderTodos() {

    // todoList.innerHTML = '';  
    //     for (let i = 0; i < todos.length; i++) {
    //         const li = document.createElement("li");
    //         li.innerHTML = `
    //             ${todos[i]}
    //             <button onclick="deleteTodo(${i})">🗑️</button>
    //         `;
    //         todoList.appendChild(li);  
    //     }

    todoList.innerHTML = todos.map((todo, index) => `
        <li>
            ${todo}
            <button class="delete-btn" onclick="deleteTodo(${index})">🗑️</button>
        </li>
    `).join('');
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

