import { useDispatch, useSelector } from "react-redux";
import { TextField, Box, InputAdornment } from "@mui/material";
import { selectText } from "../../redux/selectors/selectors";
import { updateText } from "../../redux/slice/slice";
import ButtonGet from "../Buttons/ButtonGetSwapi";

const Form = () => {
  const dispatch = useDispatch();
  const text = useSelector(selectText);

  const handleInputChange = (e) => {
    dispatch(updateText(e.target.value));
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        gap: 1,
        mx: "auto",
        alignItems: "center",
      }}
    >
      <TextField
        fullWidth
        placeholder="people/1/"
        value={text}
        onChange={handleInputChange}
        InputProps={{
          startAdornment: <InputAdornment position="start">https://swapi.dev/api/</InputAdornment>,
        }}
      />
      <ButtonGet query={text} />
    </Box>
  );
};

export default Form;
