import { ListItem, ListItemText, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleCompleteTodo } from "../../Redux/slice/todoSlice";
import { isLoading } from "../../redux/selectors/selectors";
import Checkbox from "@mui/material/Checkbox";

const ListItems = ({ text, id, completed, onEdit }) => {
  const Loading = useSelector(isLoading);
  const dispatch = useDispatch();

  const handlelCick = () => {
    dispatch(deleteTodo(id));
  };

  const handleToggle = () => {
    dispatch(toggleCompleteTodo(id));
  };

  const handleTextClick = () => {
    onEdit(id, text); // Передаем ID и текст в `TodoList`
  };

  return (
    <ListItem className="todo-item">
      <Checkbox
        checked={completed}
        onChange={handleToggle}
      />
      <ListItemText
        primary={text}
        onClick={handleTextClick}
      />

      <Button
        variant="contained"
        color="error"
        onClick={handlelCick}
        disabled={Loading}
      >
        DELETE
      </Button>
    </ListItem>
  );
};

export default ListItems;
