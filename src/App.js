import React from "react";

function App(props) {
const text = "Hi there! start typing in the box";
  return (
    <>
      <h1>Speed Typing Game</h1>
      <h4>4:00</h4>
      <textarea value={text}/>
      <button>Start</button>
      <h1>20</h1>
    </>
  )
}

export default App;