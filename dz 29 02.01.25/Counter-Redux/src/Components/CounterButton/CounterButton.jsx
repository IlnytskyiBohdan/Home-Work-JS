import { useDispatch } from "react-redux";

const CounterButton = ({ actionType, label }) => {
  const dispather = useDispatch();
  const onClick = () => {
    dispather(actionType());
  };

  return <button onClick={onClick}>{label}</button>;
};

export default CounterButton;
