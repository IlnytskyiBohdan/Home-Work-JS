import React, { Component } from 'react';
import './EmojiList.css';

class EmojiList extends Component {
  render() {
    const { emojis, votes, onVote } = this.props;

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
  }
}

export default EmojiList;
