import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

const QnA = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');

  useEffect(() => {
    socket.on('update-questions', (question) => {
      setQuestions((prevQuestions) => [...prevQuestions, question]);
    });

    return () => {
      socket.off('update-questions');
    };
  }, []);

  const handleAskQuestion = () => {
    socket.emit('new-question', newQuestion);
    setNewQuestion('');
  };

  return (
    <div>
      <h2>Live Q&A</h2>
      <input
        type="text"
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
      />
      <button onClick={handleAskQuestion}>Ask</button>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>{question}</li>
        ))}
      </ul>
    </div>
  );
};

export default QnA;
