import React, { Component } from "react";
import "./Results.css";

class Results extends Component {
  render() {
    const { winner, emojis, votes } = this.props;

    return (
     Boolean(winner) && (
        <div className="results-container">
          <h2 className="results-title">Результати голосування:</h2>
          <p>Переможець:</p>
          <div className="winner-emoji">{emojis[winner]}</div>
          <p>Кількість голосів: {votes[winner]}</p>
        </div>
      )
    );
  }
}

export default Results;
