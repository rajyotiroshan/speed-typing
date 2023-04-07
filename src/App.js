import React, { useState } from "react";

function App(props) {
  const [text, setText] = useState("");
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

  return (
    <div>
      <h1>Speed Typing Game: How fastdo you type?</h1>
      {/**react normalizes the text area as input tag so self cosing tag */}
      <textarea onChange={handleChange} value={text} />
      <h4>Time remaining: ???</h4>
      <button onClick={() => calculateWordCount(text)}>Start</button>
      <h1>Word count: {0}</h1>
    </div>
  );
}

export default App;
