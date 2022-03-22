import React, {useState} from 'react';
import { GoogleLogout, GoogleLogin } from 'react-google-login';
import './App.css';

function App() {
  const clientId = 'YOUR_GOOGLE_CLIENT_ID';
  const [showLoginButton, setShowLoginButton] = useState(true);
  const [showLogoutButton, setShowLogoutButton] = useState(false);

  const onLoginFailure = (res) => {
    console.log(res);
  };

  const onLoginSuccess = (res) => {
    console.log(res);
    setShowLoginButton(false);
    setShowLogoutButton(true);
  };

  const onLogoutSuccess = (res) => {
    console.log(res);
    setShowLoginButton(true);
    setShowLogoutButton(false);
  };
  

  return (
    <div className="App">
      {showLoginButton && <GoogleLogin
        clientId={clientId}
        buttonText='Log In'
        onSuccess={onLoginSuccess}
        onFailure={onLoginFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      
      
      />}

      {showLogoutButton && <GoogleLogout
        clientId={clientId}
        buttonText='Log out'
        onLogoutSuccess={onLogoutSuccess}     
      
      />}
    </div>
  );
}

export default App;
