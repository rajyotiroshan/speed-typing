import React, { useState, useEffect } from "react";

function App(props) {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(5);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }
  function calculateWordCount(text) {
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
    if (timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    }
  }, [timeRemaining]);

  return (
    <div>
      <h1>Speed Typing Game: How fastdo you type?</h1>
      {/**react normalizes the text area as input tag so self cosing tag */}
      <textarea onChange={handleChange} value={text} />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={() => calculateWordCount(text)}>Start</button>
      <h1>Word count: {0}</h1>
    </div>
  );
}

export default App;
