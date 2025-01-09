"use strict";

const apiBase = "http://localhost:8080/api/todos";
let editingId = null;

async function getTodos() {
  const res = await fetch(apiBase);
  const todos = await res.json();

  const todoList = document.getElementById("todo-list");

  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }

  todos.forEach((todo) => {
    const li = document.createElement("li");

    const title = document.createElement("span");
    title.textContent = todo.title;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = () => startEdit(todo._id, todo.title);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteTodo(todo._id);

    li.appendChild(title);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    todoList.appendChild(li);
  });
}

async function handleAddOrSave() {
  const input = document.getElementById("todo-input");
  const button = document.getElementById("todo-button");
  const title = input.value.trim();

  if (!title) return alert("Please enter a task!");

  if (editingId) {
    await fetch(`${apiBase}/${editingId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    editingId = null;
    button.textContent = "Add";
  } else {
    await fetch(apiBase, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
  }

  input.value = "";
  getTodos();
}

function startEdit(id, currentTitle) {
  const input = document.getElementById("todo-input");
  const button = document.getElementById("todo-button");

  editingId = id;
  input.value = currentTitle;
  button.textContent = "Save";
}

async function deleteTodo(id) {
  await fetch(`${apiBase}/${id}`, { method: "DELETE" });
  getTodos();
}

getTodos();
