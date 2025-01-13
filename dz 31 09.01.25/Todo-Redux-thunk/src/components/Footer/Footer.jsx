import { useSelector } from "react-redux";
import { selectTodosCounter } from "../../redux/selectors/selectors";

const Footer = () => {
  const totalTasks = useSelector(selectTodosCounter);

  return <footer className="footer">Total tasks: {totalTasks}</footer>;
};

export default Footer;
