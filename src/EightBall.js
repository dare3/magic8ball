import React, { useState } from 'react';
import './EightBall.css';

// List of possible answers and colors
const defaultAnswers = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];

const EightBall = ({ answers = defaultAnswers }) => {
  const [message, setMessage] = useState("Think of a Question");
  const [color, setColor] = useState("black");
  const [counts, setCounts] = useState({ green: 0, goldenrod: 0, red: 0 });

  const getRandomAnswer = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
  };

  const handleClick = () => {
    const { msg, color } = getRandomAnswer();
    setMessage(msg);
    setColor(color);
    setCounts(prevCounts => ({
      ...prevCounts,
      [color]: prevCounts[color] + 1,
    }));
  };

  const handleReset = () => {
    setMessage("Think of a Question");
    setColor("black");
  };

  return (
    <div className="eightball-container">
      <div
        onClick={handleClick}
        className="eightball-ball"
        style={{ backgroundColor: color }}
      >
        {message}
      </div>
      <button onClick={handleReset} className="eightball-reset-button">
        Reset
      </button>
      <div className="eightball-color-counts">
        <p>Green: {counts.green}</p>
        <p>Goldenrod: {counts.goldenrod}</p>
        <p>Red: {counts.red}</p>
      </div>
    </div>
  );
};

export default EightBall;
