import React, { useState, useEffect } from "react";

function App(props) {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(15);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
    if (isTimeRunning && timeRemaining >= 0) setWordCount(calculateWordCount());
  }
  function calculateWordCount() {
    const wordsArrray = text.trim().split(" ");
    const filteredWord = wordsArrray.filter((word) => word !== "");
    console.log(filteredWord.length);
    return filteredWord.length;
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
      setIsTimeRunning(false);
      setTimeRemaining(15);
    }
  }, [timeRemaining, isTimeRunning]);

  return (
    <div>
      <h1>Speed Typing Game: How fastdo you type?</h1>
      {/**react normalizes the text area as input tag so self cosing tag */}
      <textarea onChange={handleChange} value={text} />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={() => setIsTimeRunning(true)}>Start</button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
