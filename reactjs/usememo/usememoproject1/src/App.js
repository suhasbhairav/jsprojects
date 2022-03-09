import React, {useState, useEffect, useMemo} from "react";
import './App.css';

function App() {
  const [counter, setCounter] = useState(1);
  const result = useMemo(() => {
    return factorial(counter);
  }, [counter]);
  const [name, setName] = useState("");


  return (
    <div className="App">
      <div>
        Factorial of {counter} is: {result}
      </div>
      <button onClick={() => setCounter(counter+1)} >Increment</button>
      <button onClick={() => setCounter(counter-1)}>Decrement</button>

      <hr />
      <div>
        <span>Name:</span>
        <input type="text"
        placeholder="Enter..."
        value={name}
        onChange={(e) => setName(e.target.value)}/>

        Name: {name}
      </div>
    </div>
  );
}

function factorial(n){  
  let i =0;
  while(i<200000000) i++;
  if(n > 0){
    return n*factorial(n-1);
  }else if(n === 0){
    return 1;
  }else{
    return -1;
  }
}

export default App;
