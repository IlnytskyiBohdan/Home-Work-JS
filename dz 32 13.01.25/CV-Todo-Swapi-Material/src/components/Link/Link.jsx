import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";

const Link = ({ to, children }) => {
  return (
    <Typography
      component={NavLink}
      to={to}
      sx={{
        color: "inherit",
        textDecoration: "none",
        "&.active": { fontWeight: "bold", textDecoration: "underline" },
        "&:hover": { color: "orange" },
      }}
    >
      {children}
    </Typography>
  );
};

export default Link;