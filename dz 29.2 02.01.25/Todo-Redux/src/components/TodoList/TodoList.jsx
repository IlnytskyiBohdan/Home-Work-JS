import { TextField, Button, List } from "@mui/material";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../../Redux/slice/todoSlice";
import ListItems from "../ListItem/ListItem";
import { selectTodos } from "../../redux/selectors/selectors";

const TodoList = () => {
  const [text, setText] = useState("");
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <>
      <div className="container">
        <TextField
          fullWidth
          label="Add a task"
          variant="outlined"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />

        <Button
          variant="contained"
          onClick={handleAddTodo}
          sx={{ marginLeft: 0.5 }}
        >
          Add
        </Button>
      </div>
      <List>
        {todos.map((todo) => (
          <ListItems
            key={todo.id}
            text={todo.text}
          />
        ))}
      </List>
    </>
  );
};

export default TodoList;
