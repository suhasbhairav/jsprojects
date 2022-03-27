import "./App.css";
import React, { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";
function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

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
      setLoggedIn(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
    setLoggedIn(false);
  };

  return (
    <div className="App">
      {!loggedIn && <div>
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
      </div>}
      <div>
        {loggedIn && user && user?.email && (
          <div>
            <div>{user.email} has logged in</div>
            <button onClick={logout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
