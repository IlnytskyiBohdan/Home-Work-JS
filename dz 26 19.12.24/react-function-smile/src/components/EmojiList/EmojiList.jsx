import "./EmojiList.css";
import PropTypes from "prop-types";

const EmojiList = ({ emojis, votes, onVote }) => {
  return (
    <div className="emoji-container">
      {emojis.map((emoji, index) => (
        <div key={index} className="emoji-item" onClick={() => onVote(index)}>
          <div>{emoji}</div>
          <div className="emoji-votes">{votes[index]}</div>
        </div>
      ))}
    </div>
  );
};
EmojiList.propTypes = {
  emojis: PropTypes.arrayOf(PropTypes.string).isRequired,
  votes: PropTypes.arrayOf(PropTypes.number).isRequired,
  onVote: PropTypes.func.isRequired,
};

export default EmojiList;
