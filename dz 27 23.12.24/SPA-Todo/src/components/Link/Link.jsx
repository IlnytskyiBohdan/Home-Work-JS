import { useContext } from "react";
import { ThemeContext } from "../../themesContext";
import { NavLink } from "react-router-dom";

const Link = (props) => {
  const [theme] = useContext(ThemeContext);

  const { children, href } = props;
  return (
    <NavLink to={href} className={theme.color}>
      {children}
    </NavLink>
  );
};

export default Link;
