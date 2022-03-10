import React, { useState, useEffect, useReducer } from "react";
import "./App.css";

const initialState = [{ id: Date.now(), name: "A", email: "a@a.com" }];

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "delete":
      return state.filter((contact) => {
        return contact.id !== action.payload.id;
      });

    default:
      return 0;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const addContact = (e) => {
    e.preventDefault();
    dispatch({type: "add", payload: {id: Date.now(), name, email}})

    setName("");
    setEmail("");

  };



  return (
    <div className="App">
      <h1>useReducer</h1>

      <form onSubmit={addContact}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Add</button>
      </form>
      <div>
        <h2>List</h2>
        <ul>
          {state.map((contact) => {
            return (<li key={contact.id}>{contact.name} {contact.email}
              <button onClick={() => dispatch({type: "delete", payload: {id: contact.id}})}>Delete</button>
            </li>);
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
