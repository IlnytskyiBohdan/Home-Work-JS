import { useDispatch, useSelector } from "react-redux";
import ButtonGet from "../Buttons/ButtonGet";
import { selectText } from "../../redux/selectors/selectors";
import { updateText } from "../../redux/slice/slice";

const Form = () => {
  const dispatch = useDispatch();
  const text = useSelector(selectText);

  const handleInputChange = (e) => {
    dispatch(updateText(e.target.value));
  };

  return (
    <form className="input-group mb-3">
      <span
        className="input-group-text"
        id="basic-addon3"
      >
        https://swapi.dev/api/
      </span>
      <input
        type="text"
        className="form-control"
        aria-describedby="basic-addon3"
        placeholder="people/1/"
        value={text}
        onChange={handleInputChange}
      />

      <ButtonGet query={text} />
    </form>
  );
};

export default Form;
