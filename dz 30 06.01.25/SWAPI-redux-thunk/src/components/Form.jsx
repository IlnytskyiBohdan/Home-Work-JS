import ButtonGet from "./Buttons/ButtonGet";

const Form = () => {
  return (
    <form
      action="https://swapi.dev/api/"
      className="input-group mb-3"
    >
      <span
        className="input-group-text"
        id="basic-addon3"
      >
        https://swapi.dev/api/
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="people/1/"
        aria-describedby="basic-addon3"
      />

      <ButtonGet />
    </form>
  );
};

export default Form;
