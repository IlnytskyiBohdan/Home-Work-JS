import { getSwapi } from "../../redux/slice/slice";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";

const ButtonGet = ({ query }) => {
  const dispatch = useDispatch();

  const hendleGet = (e) => {
    e.preventDefault();
    const text = query.trim();
    dispatch(getSwapi(text || ""));
  };

  return (
    <Button
      onClick={hendleGet}
      variant="contained"
      sx={{ alignSelf: "center", width: "25%" }}
    >
      Get info
    </Button>
  );
};

export default ButtonGet;
