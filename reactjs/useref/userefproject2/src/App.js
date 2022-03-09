import React, {useState, useEffect, useRef} from "react";
import './App.css';

function App() {

  const [text, setText] = useState("");
  const [newText, setNewText] = useState("");
  const textElement = useRef("");
  const newTextEle = useRef("");
  useEffect(() => {
    setText("");
    setNewText("Sample...");
  }, []);
  
  const resetText = () => {
    setText("");
    textElement.current.focus();
  }

  const resetNewText = () => {
    setNewText("");
    newTextEle.current.focus();
  }

  return (
    <div className="App">
      <input type="text"
      ref={textElement}
      value={text}
      onChange={(e) => setText(e.target.value)} />

      <input type="text"
      value={newText}
      ref={newTextEle}
      onChange={(e) => setNewText(e.target.value)} />

      <button onClick={resetText}>Reset</button>
      <button onClick={resetNewText}>Reset New Text</button>

      <div>You entered: {text}, {newText}</div>
    </div>
  );
}

export default App;
