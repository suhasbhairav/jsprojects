import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Box, Button, TextField, Typography} from '@material-ui/core';
import {useHistory} from "react-router-dom";
import "./Auth.css";


const Login = () => {
    let history = useHistory();

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = (e) => {
        e.preventDefault();

        axios({
            url: "/auth/login",
            method: "POST",
            data: {email, password},
        }).then((res) => {
            window.localStorage.setItem("isAuthenticated", true);
            if(res === 200){
                setSuccess(true);
                setError(false);
                history.push("/");
            }
        }).catch(({response}) => {
            setError(response.data.message);
            setSuccess(false);
        });
    }

    return (
        <div className="auth-background d-flex justify-content-center">
          <form onSubmit={onLogin}>
            <Box boxShadow={3} className="auth-box">
              {success && "You've logged in successfully"}
              {error}
              <Typography variant="h5" className="font-weight-bold row">
                Login
              </Typography>
              <div className="auth-inputs">
                <div className="auth-field">
                  <span className="auth-subtitle">E-mail Address</span>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="email"
                    name={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="auth-field">
                  <span className="auth-subtitle">Password</span>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="password"
                    name={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <Button
                fullWidth
                type="submit"
                className="mt-4 p-3 submit-button"
                variant="contained"
              >
                <Typography variant="h6" className="font-weight-bold">
                  Login
                </Typography>
              </Button>
              <p className="mt-2">
                Don’t have an account? Sign up?{" "}
                <Link to={"/register"}>Register</Link>
              </p>
            </Box>
          </form>
        </div>
      );
}

export default Login