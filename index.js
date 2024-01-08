let todoItems = [];
const addButton = document.getElementById("add-button");
const inputField = document.getElementById("input-field");
const todoList = document.getElementById("todo-list");
const savedTodos = JSON.parse(localStorage.getItem("todoItems"));

// Check for existing todos in local storage
if (savedTodos) {
    todoItems = savedTodos;
    renderTodos(todoItems);
}

// Render todos on the screen
function renderTodos(items) {
    todoList.innerHTML = "";
    for (let i = 0; i < items.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = items[i];
        todoList.appendChild(listItem);

        // Add click event listener for deletion
        listItem.addEventListener("click", function () {
            deleteTodoItem(i);
        });
    }
}

// Save Button
addButton.addEventListener("click", function () {
    const newTodoItem = inputField.value;
    if (newTodoItem) {
        todoItems.push(newTodoItem);
        inputField.value = "";
        localStorage.setItem("todoItems", JSON.stringify(todoItems));
        renderTodos(todoItems);
    }
});

// Delete Button
function deleteTodoItem(index) {
    todoItems.splice(index, 1);
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
    renderTodos(todoItems);
}
