import "./App.css";
import React, { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";
import {useNavigate} from "react-router-dom";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let profile = sessionStorage.getItem("profile");
    
    if(profile){
      navigate("/home");
    }

  }, []);
  

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user);
      navigate("/home");
      window.sessionStorage.setItem('profile', user);
      
    } catch (error) {
      console.log(error.message);
    }
  };

  

  return (
    <div className="App">
      <div>
        <div>
          <h1>Register</h1>

          <input
            placeholder="Email"
            name={registerEmail}
            type="email"
            onChange={(e) => setRegisterEmail(e.target.value)}
          />

          <input
            placeholder="Password"
            name={registerPassword}
            type="password"
            onChange={(e) => setRegisterPassword(e.target.value)}
          />

          <button onClick={register}> Register</button>
        </div>

        <div>
          <h1>Login</h1>

          <input
            placeholder="Email"
            name={loginEmail}
            type="email"
            onChange={(e) => setLoginEmail(e.target.value)}
          />

          <input
            placeholder="Password"
            name={loginPassword}
            type="password"
            onChange={(e) => setLoginPassword(e.target.value)}
          />

          <button onClick={login}>Login</button>
        </div>
      </div>
      
    </div>
  );
}

export default App;
