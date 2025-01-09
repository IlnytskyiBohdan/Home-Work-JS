import { AppBar, Toolbar, Typography, Stack } from "@mui/material";
import NavLink from "../Link/Link";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function Header() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <AppBar
      position="static"
      color={darkMode ? "primary" : "default"}
    >
      <Toolbar className="header-toolbar">
        <Typography variant="h6">Todo</Typography>
        <Stack
          direction="row"
          className="nav-links"
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Me</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
        </Stack>
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  );
}
