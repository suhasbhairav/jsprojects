import React, {useState, useEffect} from "react";
import CComponent from "./CComponent";
import FComponent from "./FComponent";
import './App.css';
import { CounterContext } from "./CounterContext";

function App() {

  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter+1);
  }

  const decrement = () => {
    setCounter(counter-1);
  }

  
  return (
    <div className="App">
      <h1>App</h1>
      {counter}
      <hr />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <CounterContext.Provider value={{counter,setCounter}}>      
        <FComponent/>
      </CounterContext.Provider>    
    </div>
  );
}

export default App;
