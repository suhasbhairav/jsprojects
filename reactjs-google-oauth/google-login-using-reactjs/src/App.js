import './App.css';
import React, {useState} from 'react';
import {GoogleLogin, GoogleLogout} from 'react-google-login';

function App() {
  const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID';
  const [showLoginButton, setShowLoginButton] = useState(true);
  const [showLogoutButton, setShowLogoutButton] = useState(false);


  const onLoginSuccess = (res) => {
    console.log(res);
    setShowLoginButton(false);
    setShowLogoutButton(true);

  };

  const onLoginFailure = (err) => {
    console.log(err);
  };

  const onSignoutSuccess = (res) => {
    console.log(res);
    setShowLoginButton(true);
    setShowLogoutButton(false);
  };

  return (
    <div className="App">
      <h1>Google Single Sign-On Login</h1>
      <div>
      {showLoginButton && <GoogleLogin
        clientId={GOOGLE_CLIENT_ID}
        buttonText= "Log In"
        onSuccess={onLoginSuccess}
        onFailure={onLoginFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
       }

       {showLogoutButton && <GoogleLogout
        clientId={GOOGLE_CLIENT_ID}
        buttonText = "Log out"
        onLogoutSuccess={onSignoutSuccess}
       
       
       />}
      </div>
      

    </div>
  );
}

export default App;
