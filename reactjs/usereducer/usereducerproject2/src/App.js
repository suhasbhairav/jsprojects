import React, {useState, useReducer} from "react";
import './App.css';

const initialState = [{
  id: Date.now(),
  name: "A",
  age: 10
}]

function reducer(state, action){
  switch(action.type){
    case "add":
      return [...state, action.payload];

    case "delete":
      return state.filter((contact) =>{
        return contact.id !== action.payload.id;
      });

      default:
        return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [name, setName] = useState("");
  const [age, setAge] = useState(10);

  const addData = (e) => {
    e.preventDefault();

    dispatch({type: "add", payload: {id: Date.now(), name: name, age: age}});
    setName("");
    setAge(10);
    
  }

  return (
    <div className="App">
      <h1>useReducer Project</h1>
      <h2>Data</h2>
      <form onSubmit={addData}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)}/>
        <button>Add</button>
      </form>

      <div>
      <ul>
        {state.map((contact) => {
          return (
          <li key={contact.id}>{contact.name},
           {contact.age}, 
           <button onClick={() => dispatch({type: "delete", payload: {id: contact.id}})}>Delete</button>
          </li>);
        })}
      </ul>
      </div>      
    </div>
  );
}

export default App;
