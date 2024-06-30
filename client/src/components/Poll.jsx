import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

const Poll = ({ pollQuestion, options }) => {
  const [votes, setVotes] = useState(Array(options.length).fill(0));

  useEffect(() => {
    socket.on('poll-update', (vote) => {
      const newVotes = [...votes];
      newVotes[vote] += 1;
      setVotes(newVotes);
    });

    return () => {
      socket.off('poll-update');
    };
  }, [votes]);

  const handleVote = (index) => {
    socket.emit('poll-vote', index);
  };

  return (
    <div>
      <h2>{pollQuestion}</h2>
      {options.map((option, index) => (
        <div key={index}>
          <button onClick={() => handleVote(index)}>{option}</button>
          <span>{votes[index]} votes</span>
        </div>
      ))}
    </div>
  );
};

export default Poll;
