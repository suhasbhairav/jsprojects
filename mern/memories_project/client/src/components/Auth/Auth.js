import {
  Avatar,
  Button,
  Grid,
  Typography,
  Container,
  Paper,
  TextField,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import Icon from './icon';
import {useHistory} from 'react-router-dom';
import React, { useState, useEffect } from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from "./Input";
import useStyles from "./styles";
import { GoogleLogin } from "react-google-login";
const Auth = () => {
  const classes = useStyles();
  const [isSignUp, setIsSignUp] = useState(false);
    const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
const history = useHistory();
  const handleSubmit = () => {};

  const handleChange = () => {};

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const switchMode = () => {
    setIsSignUp(!isSignUp);
    handleShowPassword(false);
  };

  const googleSuccess = async (res) => {
    console.log(res);
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
       dispatch({type: 'AUTH', data: {result, token}}); 
        history.push("/");
    
    } catch (error) {
       console.log(error); 
    }
  };

  const googleFailure = (error) => {
      console.log(error);
    console.log("Google Sign In Failed");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input
                  autoFocus
                  half
                  handleChange={handleChange}
                  name="firstName"
                  label="First Name"
                />
                <Input
                  half
                  handleChange={handleChange}
                  name="lastName"
                  label="Last Name"
                />
              </>
            )}
            <Input
              name="email"
              label="Email"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignUp && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
          <GoogleLogin
            clientId="641481154088-15ns05a1ugjl8ihn9v57m3jsvdctl2mj.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
                fullWidth
                color="primary"
                className={classes.googleButton}
              >Google Sign In</Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />

          

          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignUp ? "Already have an account? Sign In" : "Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
