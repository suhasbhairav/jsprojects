import './App.css';
import React, {useState} from "react";

function App() {

  const [name, setName] = useState("Suhas");
  const [name2, setName2] = useState("US");
  const [justNumber, setJustNumber] = useState(0);
  const [booleanValue, setBooleanValue] = useState(false);
  const [text, setText] = useState("Initial Text");
  const [anotherText, setAnotherText] = useState("Another Text");


  function changeName(){
    setName("Bhairav");
  }

  function changeName2(){
    setName2("Canada");
  }

  function incrementNumber(){
    setJustNumber(justNumber+1);
  }

  function decrementNumber(){
    if(booleanValue){
      setJustNumber(justNumber-1);
    }    
  }

  function changeBoolean(){
    setBooleanValue(!booleanValue);
  }

  function changeText(){
    setText("This is a long text....");
  }

  function modifyText(){
    setAnotherText("This is a short text...");
  }

  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <button onClick={changeName}>Click</button>
    
      <h2>Hi {name2}</h2>
      <button onClick={changeName2}>Click</button>
    
      <h3>Count {justNumber}</h3>
      <button onClick={incrementNumber}>Increment</button>
      <button onClick={decrementNumber}>Decrement</button>

      <h4>Change Boolean Value</h4>
      <button onClick={changeBoolean}>Change</button>

      <h5>Text: {text}</h5>
      <button onClick={changeText}>Change Text</button>

      <h1>Another: {anotherText}</h1>
      <button onClick={modifyText}>Modify Text</button>
    </div>
  );
}

export default App;
