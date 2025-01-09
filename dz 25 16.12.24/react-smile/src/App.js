import React, { Component } from "react";
import EmojiList from "./components/EmojiList/EmojiList";
import Results from "./components/Results/Results";
import Buttons from "./components/Buttons/Buttons";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      votes: JSON.parse(localStorage.getItem("votes")) || [0, 0, 0, 0, 0],
      winner: null,
    };
  }

  addingVote = (index) => {
    const updatedVotes = [...this.state.votes];
    updatedVotes[index] += 1;

    this.setState({ votes: updatedVotes }, () => {
      localStorage.setItem("votes", JSON.stringify(this.state.votes));
    });
  };

  showResults = () => {
    const maxVotes = Math.max(...this.state.votes);

    if (maxVotes > 0) {
      const winnerIndex = this.state.votes.indexOf(maxVotes);
      this.setState({ winner: winnerIndex });
    } else {
      this.setState({ winner: null });
    }
  };

  resetVotes = () => {
    const resetVotes = [0, 0, 0, 0, 0];

    this.setState({ votes: resetVotes, winner: null }, () => {
      localStorage.removeItem("votes");
    });
  };

  render() {
    const { votes, winner } = this.state;
    const emojis = ["😃", "😊", "😎", "🤩", "😍"];

    return (
      <div className="app-container">
        <h1 className="app-title">Голосування за найкращий смайлик</h1>
        <EmojiList emojis={emojis} votes={votes} onVote={this.addingVote} />
        <div className="button-container">
          <Buttons title="Show Results" onClick={this.showResults} className="button button-result" />
          <Buttons title="Clear Results" onClick={this.resetVotes} className="button button-clear" />
        </div>
        <Results winner={winner} emojis={emojis} votes={votes} />
      </div>
    );
  }
}

export default App;
