import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const NavLink = ({ to, children }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <Link
      to={to}
      className={`nav-link ${darkMode ? "dark" : "light"}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
