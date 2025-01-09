"use strict";

const todoForm = document.querySelector(".js--form");
const todoInput = document.querySelector(".js--form__input");
const todosWrapper = document.querySelector(".js--todos-wrapper");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
renderTodos(todos);

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = todoInput.value.trim();
  if (text) {
    const todo = { text, completed: false };
    todos.push(todo);
    renderTodoItem(todo, todos.length - 1);
    updateLocalStorage();
    todoInput.value = "";
  }
});

todosWrapper.addEventListener("click", (event) => {
  const task = event.target.closest(".todo-item");
  if (!task) return;

  const index = task.dataset.index;
  const todo = todos[index];

  if (event.target.classList.contains("todo-item__delete")) {
    todos.splice(index, 1);
    renderTodos(todos);
  } else if (event.target.type === "checkbox") {
    todo.completed = event.target.checked;
    task.classList.toggle("todo-item--checked", todo.completed);
  }

  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos(todosList) {
  const fragment = document.createDocumentFragment();
  todosList.forEach((todo, index) => {
    const task = createTodoItem(todo, index);
    fragment.appendChild(task);
  });
  todosWrapper.replaceChildren(fragment);
}

function renderTodoItem(todo, index) {
  const task = createTodoItem(todo, index);
  todosWrapper.appendChild(task);
}

function createTodoItem(todo, index) {
  const task = document.createElement("li");
  task.className = "todo-item";
  task.dataset.index = index;
  if (todo.completed) task.classList.add("todo-item--checked");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;

  const taskText = document.createElement("span");
  taskText.className = "todo-item__description";
  taskText.textContent = todo.text;

  const deleteButton = document.createElement("button");
  deleteButton.className = "todo-item__delete";
  deleteButton.textContent = "Видалити";

  task.append(checkbox, taskText, deleteButton);
  return task;
}
