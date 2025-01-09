import { useSelector } from "react-redux";
import selectors from "../../Redux/Slice/Selectors";

const Header = () => {
  const value = useSelector(selectors.counter.value);
  return <header>Value: {value}</header>;
};

export default Header;
