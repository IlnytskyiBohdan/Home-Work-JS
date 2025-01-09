import { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import { Button } from "@mui/material";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <Button
            className="button-delete"
              variant="outlined"
              onClick={() => removeTodo(index)}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
