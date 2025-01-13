import { getSwapi } from "../../redux/slice/slice";
import { useDispatch } from "react-redux";

const ButtonGet = ({query}) => {
  const dispatch = useDispatch();

  const hendleGet = (e) => {
    e.preventDefault();
    const text = query.trim();
    dispatch(getSwapi(text || ""));
  };

  return (
    <button
      onClick={hendleGet}
      className="btn btn-outline-secondary"
    >
      Get info
    </button>
  );
};

export default ButtonGet;
