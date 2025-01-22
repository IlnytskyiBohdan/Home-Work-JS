import { useState } from "react";
import { Button, Box, Typography, List, ListItem, ListItemText, Paper } from "@mui/material";
import TodoForm from "../TodoForm/TodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <Box sx={{ gap: 2, maxWidth: 600, mx: "auto" }}>
      <Typography
        variant="h5"
        mb={2}
        mt={4}
      >
        Todo List
      </Typography>

      <TodoForm addTodo={addTodo} />

      <List sx={{ mt: 2 }}>
        {todos.map((todo, index) => (
          <Paper
            key={index}
            sx={{ mb: 1, p: 1, display: "flex", alignItems: "center", justifyContent: "space-between" }}
          >
            <ListItem>
              <ListItemText primary={todo} />
              <Button
                variant="contained"
                color="error"
                onClick={() => removeTodo(index)}
              >
                Delete
              </Button>
            </ListItem>
          </Paper>
        ))}
      </List>
    </Box>
  );
};

export default TodoList;
