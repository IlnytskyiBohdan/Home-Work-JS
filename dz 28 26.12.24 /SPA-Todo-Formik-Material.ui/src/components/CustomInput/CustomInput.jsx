import { TextField } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function CustomInput({ label, ...props }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <TextField
      fullWidth
      label={label}
      variant="outlined"
      InputLabelProps={{
        sx: {
          color: darkMode ? "#fff" : "#000",
        },
      }}
      InputProps={{
        sx: {
          color: darkMode ? "#fff" : "#000",
          backgroundColor: darkMode ? "#333" : "#fff",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: darkMode ? "#fff" : "#ccc",
          },
        },
      }}
      {...props}
    />
  );
}
