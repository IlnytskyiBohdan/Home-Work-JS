import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import Link from "../Link/Link";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          component={NavLink}
          to="/About-me"
          variant="h6"
          sx={{ color: "inherit", textDecoration: "none !important", cursor: "pointer", "&:hover": { color: "orange" } }}
        >
          CV Bohdan Ilnytskyi
        </Typography>
        <Box
          component="nav"
          sx={{ display: "flex", gap: 2 }}
        >
          <Link to="/About-me">About me</Link>
          <Link to="/Todo">Todo List</Link>
          <Link to="/Swapi">Swapi</Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
