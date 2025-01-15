import { TextField, Button, List } from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, clearAll, editTodoStart, fetchStart } from "../../Redux/slice/todoSlice";
import ListItems from "../ListItem/ListItem";
import { selectTodos, isLoading } from "../../redux/selectors/selectors";

const TodoList = () => {
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);
  const todos = useSelector(selectTodos);
  const Loading = useSelector(isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStart());
  }, []);

  const handleAddTodo = async () => {
    if (text.trim()) {
      if (editId) {
        dispatch(editTodoStart({ id: editId, text }));
        setEditId(null);
      } else {
        dispatch(addTodo(text));
      }
      setText("");
    }
  };

  const handleEdit = (id, text) => {
    setEditId(id);
    setText(text);
  };

  const handleClear = () => {
    dispatch(clearAll());
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
          disabled={Loading}
          sx={{ marginLeft: 0.5 }}
        >
          {editId ? "Save" : "Add"}
        </Button>
      </div>
      <List>
        {todos.map((todo) => (
          <ListItems
            completed={todo.completed}
            key={todo.id}
            id={todo.id}
            text={todo.text}
            onEdit={handleEdit}
          />
        ))}
      </List>
      <Button
        variant="contained"
        onClick={handleClear}
        disabled={Loading}
        sx={{ marginBottom: 0.5, backgroundColor: "orange" }}
      >
        Clear
      </Button>
    </>
  );
};

export default TodoList;
