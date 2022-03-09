import React, {useState, useEffect,useCallback, useMemo} from "react";
import './App.css';

function App() {

  const [counter, setCounter] = useState(1);
  const result = useMemo(() => {
    return factorial(counter);
  }, [counter]);

  const [name, setName] = useState("");

  const displayName = useCallback(() => {
    return name;
  }, [name]);

  return (
    <div className="App">
      <h1>
        Factorial of {counter} is {result}
      </h1>

      <div>
        <button onClick={() => setCounter(counter+1)}>Increase</button>
        <button onClick={() => setCounter(counter-1)}>Decrease</button>
      </div>

      <div>
        Enter Name
        <input type="text"
        placeholder="enter name"
        value={name}
        onChange={(e) => setName(e.target.value)} />
      </div>

      <DisplayName displayName= {displayName}></DisplayName>
    </div>
  );
}

const DisplayName = ({displayName}) => {

  const [value, setValue] = useState("");
  useEffect(() => {
    setValue(displayName()); 
   
  }, [displayName]);
  

  return <p>Name: {value}</p>
};

const factorial = (n) => {
  if(n< 0){
    return -1;
  }else if(n === 0){
    return 1;
  }
  return n * factorial(n-1);
}



export default App;
