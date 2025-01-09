import { useState, useEffect } from "react";
import EmojiList from "./components/EmojiList/EmojiList";
import Results from "./components/Results/Results";
import Buttons from "./components/Buttons/Buttons";
import "./App.css";

const App = () => {
  const initialVotes = JSON.parse(localStorage.getItem("votes")) || [0, 0, 0, 0, 0];
  const [votes, setVotes] = useState(initialVotes);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    localStorage.setItem("votes", JSON.stringify(votes));
  }, [votes]);

  const addingVote = (index) => {
    const updatedVotes = [...votes];
    updatedVotes[index] += 1;
    setVotes(updatedVotes);
  };

  const showResults = () => {
    const maxVotes = Math.max(...votes);
    const winnerIndex = votes.indexOf(maxVotes);
    setWinner(maxVotes > 0 ? winnerIndex : null );
  };

  const resetVotes = () => {
    setVotes([0, 0, 0, 0, 0]);
    setWinner(null);
    localStorage.removeItem("votes");
  };

  const emojis = ["😃", "😊", "😎", "🤩", "😍"];

  return (
    <div className="app-container">
      <h1 className="app-title">Голосування за найкращий смайлик</h1>
      <EmojiList emojis={emojis} votes={votes} onVote={addingVote} />
      <div className="button-container">
        <Buttons title="Show Results" onClick={showResults} className="button button-result" />
        <Buttons title="Clear Results" onClick={resetVotes} className="button button-clear" />
      </div>
      <Results winner={winner} emojis={emojis} votes={votes} />
    </div>
  );
};

export default App;
