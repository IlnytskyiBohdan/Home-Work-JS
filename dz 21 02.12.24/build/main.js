// // dz 21

"use strict";

var $todoForm = $(".js--form");
var $todoInput = $(".js--form__input");
var $todosWrapper = $(".js--todos-wrapper");
var $modalTaskText = $("#task-text");
$todoForm.on("submit", function (event) {
  event.preventDefault();
  var text = $todoInput.val().trim();
  if (!text) {
    alert("Задача не может быть пустой!");
    return;
  }
  var todo = {
    text: text,
    completed: false
  };
  todos.push(todo);
  updateLocalStorage();
  renderTodoItem(todo, todos.length - 1);
  $todoInput.val("");
});
$todosWrapper.on("click", ".todo-item", function (event) {
  var $task = $(event.currentTarget);
  var index = $task.data("index");
  var todo = todos[index];
  if ($(event.target).hasClass("todo-item__delete")) {
    handleDelete(index);
  } else if ($(event.target).is(":checkbox")) {
    handleToggle($task, todo);
  } else if ($(event.target).hasClass("todo-item__description")) {
    handleModal(todo.text);
  }
});
var handleDelete = function handleDelete(index) {
  todos.splice(index, 1);
  updateLocalStorage();
  renderTodos(todos);
};
var handleToggle = function handleToggle($task, todo) {
  todo.completed = !todo.completed;
  $task.toggleClass("text-decoration-line-through", todo.completed);
  updateLocalStorage();
};
var handleModal = function handleModal(text) {
  $modalTaskText.text(text);
  $("#taskModal").modal("show");
};
var updateLocalStorage = function updateLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
};
var renderTodos = function renderTodos(todosList) {
  $todosWrapper.empty();
  todosList.forEach(function (todo, index) {
    return renderTodoItem(todo, index);
  });
};
var renderTodoItem = function renderTodoItem(todo, index) {
  var $task = $("<li>").addClass("list-group-item d-flex justify-content-between align-items-center todo-item").attr("data-index", index).toggleClass("text-decoration-line-through", todo.completed).append($("<input>").attr("type", "checkbox").addClass("form-check-input me-2").prop("checked", todo.completed), $("<span>").addClass("todo-item__description flex-grow-1").text(todo.text), $("<button>").addClass("btn btn-danger btn-sm todo-item__delete").text("Видалити"));
  $todosWrapper.append($task);
};
var todos = JSON.parse(localStorage.getItem("todos")) || [];
renderTodos(todos);