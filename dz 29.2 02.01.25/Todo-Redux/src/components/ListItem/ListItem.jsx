import { ListItem, ListItemText } from "@mui/material";

const ListItems = ({ text }) => {
  return (
    <ListItem className="todo-item">
      <ListItemText primary={text} />
    </ListItem>
  );
};

export default ListItems;
