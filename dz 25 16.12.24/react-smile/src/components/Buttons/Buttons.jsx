import React, { Component } from "react";
import "./Buttons.css";

class Buttons extends Component {
  render() {
    const { title, onClick, className } = this.props;

    return (
      <button onClick={onClick} className={className}>
        {title}
      </button>
    );
  }
}

export default Buttons;
