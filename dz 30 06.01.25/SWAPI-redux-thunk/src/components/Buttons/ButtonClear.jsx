import { clearSwapi } from "../../redux/slice/slice";
import { useDispatch } from "react-redux";

const ButtonClear = () => {
  const dispatch = useDispatch();
  const hendleDelete = () => {

    dispatch(clearSwapi());
  };
  return (
    <button
      className="btn btn-warning mt-1"
      onClick={hendleDelete}
    >
      Clear
    </button>
  );
};

export default ButtonClear;
