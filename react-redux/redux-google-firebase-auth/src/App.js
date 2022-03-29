
import './App.css';
import React,{useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux"

import {login, logout, selectUser} from "./features/userSlice";
import {auth} from "./firebase-config";

import Home from './Home';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginState, setIsLoginState] = useState("login");

  const handleSubmit = (e) => {
    e.preventDefault();
    isRegister ? handleLogin(): handleRegister();
  };

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
        dispatch(login({
          id: authUser.uid,
          name: authUser.displayName ? authUser.displayName : authUser.email,
          lastsignIn: authUser.metadata.lastSignInTime,
          verified: String(authUser.emailVerified)
        }))
      }else{
        dispatch(logout());
      }
    });
  }, [dispatch]);

  const handleLogin = () => {
    if(email && password.trim() !== ""){
      auth.signInWithEmailAndPassword(email, password)
      .then((data) => alert("logged in"))
      .catch((err) => alert(err));      
    }
  };

  const handleRegister = () => {
    if(email && password !== ""){
      auth.createUserWithEmailAndPassword(email, password)
      .then((data) => alert("Registered Successfully"))
      .catch((err) => alert(err));
    }
  };


  const handleGoogle = () => {
    //auth.signInWithPopup(googleProvider);

  };

  const handleFacebook = () =>{
    //auth.signInWithPopup(facebookProvider);
  };
  

  return (
    <div className="App">
      <h1>React Redux with Firebase Login</h1>
      <div>
        <input
        name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          required={true}
          placeholder="Enter your email"
        />
        
        <input
        name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required={true}
          placeholder="Enter your password"
        />
        <button onClick={handleSubmit} type="submit">
          Login
        </button>
        <div>
          <button onClick={handleGoogle}>
            Google Login
          </button>
        </div>
        <div>
          <button onClick={handleFacebook}>
            Facebook Login
          </button>
        </div>
        <p>
                  {isRegister ? "New member? " : "Already registered? "}

                  <span onClick={() => setIsRegister((show) => !show)}>
                    {isRegister ? "Register" : "Login"}
                  </span>
                </p>
      </div>
    </div>
  );
}

export default App;
