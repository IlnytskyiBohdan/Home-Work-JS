import { useContext } from "react";
import { Switch } from "@mui/material";
import { ThemeContext } from "../context/ThemeContext";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness3Icon from "@mui/icons-material/Brightness3";

export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className="theme-toggle">
      <Brightness7Icon className="sun-icon" />
      <Switch
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
        className="theme-switch"
      />
      <Brightness3Icon className="moon-icon" />
    </div>
  );
}
