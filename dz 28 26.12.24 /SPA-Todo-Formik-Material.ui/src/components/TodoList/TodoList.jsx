import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function TodoList({ tasks, onDelete }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <List className="todo-list">
      {tasks.map((task) => (
        <ListItem
          key={task.id}
          className="todo-item"
        >
          <ListItemText primary={task.text} />
          <IconButton
            edge="end"
            onClick={() => onDelete(task.id)}
            className={`delete-button ${darkMode ? "dark" : "light"}`}
          >
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
}
