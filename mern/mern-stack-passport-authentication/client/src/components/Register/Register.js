import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useHistory, Link} from 'react-router-dom';
import "./Auth.css";
import { Box, Button, TextField, Typography } from "@material-ui/core";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    let history = useHistory();


    const onSignUp = (e) => {
        e.preventDefault();

        axios({
            url: "/auth/register",
            method: "POST",
            data: {email, password, firstName, lastName},
        }).then((res) => {
            window.localStorage.setItem("isAuthenticated", true);
            if(res.status === 200){
                setSuccess(true);
                setError(false);
                history.push("/");
            }
        }).catch(({response}) => {
            setError(response.data.message);
            setSuccess(false);
        });
    };

    return (
        <div className="auth-background d-flex justify-content-center">
          <Box boxShadow={3} className="auth-box">
            <form onSubmit={onSignUp}>
              {success && "You've registered in successfully"}
              {error}
              <Typography variant="h5" className="font-weight-bold row">
                Create an account
              </Typography>
              <div className="auth-inputs">
                <div className="auth-field auth-flex">
                  <div className="w-50">
                    <span className="auth-subtitle">First Name</span>
                    <TextField
                      fullWidth
                      variant="outlined"
                      name={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="w-50 ml-4">
                    <span className="auth-subtitle">Last Name</span>
                    <TextField
                      fullWidth
                      variant="outlined"
                      name={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
  
                <div className="auth-field">
                  <span className="auth-subtitle">E-mail Address</span>
                  <TextField
                    type="email"
                    fullWidth
                    variant="outlined"
                    name={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="auth-field">
                  <span className="auth-subtitle">Password</span>
                  <TextField
                    type="password"
                    fullWidth
                    variant="outlined"
                    name={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
  
              <Button
                fullWidth
                className="mt-4 p-3 submit-button"
                variant="contained"
                type="submit"
              >
                <Typography variant="h6" className="font-weight-bold">
                  Create account
                </Typography>
              </Button>
              <p className="mt-2">
                Already have an account? <Link to={"/login"}>Login</Link>
              </p>
            </form>
          </Box>
        </div>
      );
}

export default Register