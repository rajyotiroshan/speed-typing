import React, { useState, useEffect } from "react";

function App(props) {
  const STARTING_TIME = 8;
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
    /* if (isTimeRunning && timeRemaining >= 0) setWordCount(calculateWordCount()); */
  }
  function calculateWordCount() {
    const wordsArrray = text.trim().split(" ");
    const filteredWord = wordsArrray.filter((word) => word !== "");
    console.log(filteredWord.length);
    return filteredWord.length;
  }
  function startGame() {
    setIsTimeRunning(true);
    setTimeRemaining(STARTING_TIME);
    setText("");
    setWordCount(0);
  }

  function endGame() {
    setIsTimeRunning(false);
    setTimeRemaining(STARTING_TIME);
    setWordCount(calculateWordCount(text));
  }
  useEffect(() => {
    /*    const id = setTimeout(() => {
      setTimeRemaining((time) => time - 1);
    }, 1000);
    if (timeRemaining == 0) clearTimeout(id); */
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  return (
    <div>
      <h1>Speed Typing Game: How fastdo you type?</h1>
      {/**react normalizes the text area as input tag so self cosing tag */}
      <textarea
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRunning}>
        Start
      </button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
