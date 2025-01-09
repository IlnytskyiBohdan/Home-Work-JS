import "./Buttons.css";
import PropTypes from "prop-types";

const Buttons = ({title, onClick, className }) => {
  return (
      <button onClick={onClick} className={className}>
        {title}
      </button>

  );
};
Buttons.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Buttons;
