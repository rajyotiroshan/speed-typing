import React, { useState } from "react";

function App(props) {
  const [text, setText] = useState("Hi there! start typing in the box");
  const [wc, setWC] = useState(0);
  const updateText = (evt) => {
    setText(evt.target.value);
    countWord();
  };

  const countWord = () => {
    console.log(text);
    const wc = text.replace(/-/g, " ").trim().split(/\s+/g).length;
    console.log(wc);
    setWC(wc);
  };
  return (
    <>
      <h1>Speed Typing Game</h1>
      <h4>4:00</h4>
      <textarea value={text} onChange={updateText} />
      <button>Start</button>
      <h1>Word count:: {wc} </h1>
    </>
  );
}

export default App;
