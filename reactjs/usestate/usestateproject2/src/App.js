import React, {useState} from "react";
import './App.css';

function App() {
  const [text, setText] = useState("Initial...");
  const [newNumber, setNewNumber] = useState(0);

  function changeText(){
    setText("Change of Text");
  }

  function increment(){
    setNewNumber(newNumber+1);
  }

  function decrement(){
    setNewNumber(newNumber-1);
  }
  return (
    <div className="App">
      <h1>useState Project</h1>

      <h2>Hello {text}</h2>
      <button onClick={changeText}>Change</button>

      <h3>Number: {newNumber}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
