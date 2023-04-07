import React, { useState } from "react";

function App(props) {
  const [text, setText] = useState("");
  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  return (
    <div>
      <h1>Speed Typing Game: How fastdo you type?</h1>
      {/**react normalizes the text area as input tag so self cosing tag */}
      <textarea onChange={handleChange} value={text} />
      <h4>Time remaining: ???</h4>
      <button>Start</button>
      <h1>Word count ??</h1>
    </div>
  );
}

export default App;
