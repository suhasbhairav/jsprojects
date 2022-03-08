import React, {useState, useEffect, useRef} from "react";
import './App.css';

function App() {

  const [name, setName] = useState("");
  const [newName, setNewName] = useState("");
  const inputEl = useRef("");
  const newNameInputEl = useRef("");

  const resetInput = () => {
    setName("");
    inputEl.current.focus();
  };

  const resetNewName = () => {
    setNewName("");
    newNameInputEl.current.focus();
  };

  return (
    <div className="App">
      <div>
        <input 
        ref={newNameInputEl}
        type="text"
        autoComplete="off"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}

        />

      <button onClick={resetNewName}>Click</button>
      <div>You entered: {newName}</div>
      <br />

      
      <input name="name" 
        ref = {inputEl}
        type="text"
        autoComplete="off"
        value={name}
        onChange={(e) => setName(e.target.value)}

        />
        <button onClick={resetInput}>Reset</button>
        </div>

        <div>You entered: {name}</div>
       
    </div>
  );
}

export default App;
