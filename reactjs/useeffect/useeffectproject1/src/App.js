import React, {useState, useEffect} from "react";
import './App.css';

function App() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState("New Text");
  const [message, setMessage] = useState("Wow");

  useEffect(() => {
    setSecond(new Date().toString());
  }, [first, message]);
  
  function changeVal(){
    setFirst(first+1);
    setMessage(new Date().toString());
  }

  return (
    <div className="App">
      <h1>useEffect Project</h1>

      <h2>New Date Time: {second}</h2>
      <h3>{first}, {message}</h3>
      <button onClick={changeVal}>Change Date</button>
    </div>
  );
}

export default App;
