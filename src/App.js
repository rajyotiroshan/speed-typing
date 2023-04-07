import React, {useState} from "react";

function App(props) {
const [text, setText] = useState("Hi there! start typing in the box");

const updateText = (evt)=>{
  setText(evt.target.value);
}

  return (
    <>
      <h1>Speed Typing Game</h1>
      <h4>4:00</h4>
      <textarea value={text} onChange={updateText}/>
      <button>Start</button>
      <h1>20</h1>
    </>
  )
}

export default App;