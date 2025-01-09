import { useContext } from "react";
import { ThemeContext, themes } from "../../themesContext";
import { Button } from "@mui/material";

const Button_day_night = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const hendleClick = () => {
    setTheme(theme.color === "day-color" ? themes.night : themes.day);
  };

  return (
    <Button
      variant="outlined"
      onClick={hendleClick}
    >
      🌞 🌙
    </Button>
  );
};

export default Button_day_night;
