import { useState, useEffect } from "react";
import TodoForm from "../../components/TodoForm/TodoForm";
import TodoList from "../../components/TodoList/TodoList";

export default function HomePage() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAdd = (taskText) => {
    const newTask = { id: Date.now(), text: taskText };
    setTasks([...tasks, newTask]);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <TodoForm onAdd={handleAdd} />
      <TodoList
        tasks={tasks}
        onDelete={handleDelete}
      />
    </div>
  );
}
