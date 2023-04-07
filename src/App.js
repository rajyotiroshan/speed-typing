import React, { useState, useEffect } from "react";

function App(props) {
  const [text, setText] = useState("Hi there! start typing in the box");
  const [wc, setWC] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(5);
  const [timeStart, setTimeStart] = useState(false)

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

  useEffect(() => {
    if (timeRemaining > 0 && timeStart) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    }
  }, [timeRemaining, timeStart]);

  const toggleTimeStart = ()=>{
    setTimeStart(!timeStart)
  }
  return (
    <>
      <h1>Speed Typing Game</h1>
      <h4>Time Remaining:: {timeRemaining}</h4>
      <textarea value={text} onChange={updateText} />
      <button onClick={toggleTimeStart}>Start</button>
      <h1>Word count:: {wc} </h1>
    </>
  );
}

export default App;
