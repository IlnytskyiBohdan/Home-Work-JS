// dz 20

"use strict";

const $todoForm = $(".js--form");
const $todoInput = $(".js--form__input");
const $todosWrapper = $(".js--todos-wrapper");
const $modalTaskText = $("#task-text");

$todoForm.on("submit", (event) => {
  event.preventDefault();
  const text = $todoInput.val().trim();

  if (!text) {
    alert("Задача не может быть пустой!");
    return;
  }

  const todo = { text, completed: false };
  todos.push(todo);
  updateLocalStorage();
  renderTodoItem(todo, todos.length - 1);
  $todoInput.val("");
});

$todosWrapper.on("click", ".todo-item", (event) => {
  const $task = $(event.currentTarget);
  const index = $task.data("index");
  const todo = todos[index];

  if ($(event.target).hasClass("todo-item__delete")) {
    handleDelete(index);
  } else if ($(event.target).is(":checkbox")) {
    handleToggle($task, todo);
  } else if ($(event.target).hasClass("todo-item__description")) {
    handleModal(todo.text);
  }
});

const handleDelete = (index) => {
  todos.splice(index, 1);
  updateLocalStorage();
  renderTodos(todos);
};

const handleToggle = ($task, todo) => {
  todo.completed = !todo.completed;
  $task.toggleClass("text-decoration-line-through", todo.completed);
  updateLocalStorage();
};

const handleModal = (text) => {
  $modalTaskText.text(text);
  $("#taskModal").modal("show");
};

const updateLocalStorage = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const renderTodos = (todosList) => {
  $todosWrapper.empty();
  todosList.forEach((todo, index) => renderTodoItem(todo, index));
};

const renderTodoItem = (todo, index) => {
  const $task = $("<li>")
    .addClass("list-group-item d-flex justify-content-between align-items-center todo-item")
    .attr("data-index", index)
    .toggleClass("text-decoration-line-through", todo.completed)
    .append(
      $("<input>").attr("type", "checkbox").addClass("form-check-input me-2").prop("checked", todo.completed),
      $("<span>").addClass("todo-item__description flex-grow-1").text(todo.text),
      $("<button>").addClass("btn btn-danger btn-sm todo-item__delete").text("Видалити")
    );

  $todosWrapper.append($task);
};

const todos = JSON.parse(localStorage.getItem("todos")) || [];
renderTodos(todos);
