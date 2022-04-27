import React, {useState, useEffect} from "react";
import { AppBar, Toolbar, Typography, Button, Avatar} from '@material-ui/core';
import useStyles from './styles';
import {Link, useHistory, useLocation} from 'react-router-dom';
import { useDispatch } from "react-redux";

function Navbar() {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    
    useEffect(() => {
      const token = user?.token;
      setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    const logout = () => {
        dispatch({type: 'LOGOUT'});
        history.push('/');
        setUser(null);
    };
    
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">
            Memories
        </Typography>
        </div>
        <Toolbar className={classes.toolbar}>
            {user ? (
                <div className={classes.profile}>
                    <Avatar src={user.result.imageUrl} className={classes.purple} alt={user.result.name}>
                        {user.result.name.charAt(0)}
                        
                    </Avatar>
                    <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
                    <Button onClick={logout} variant="contained" className={classes.logout} color="secondary">Logout</Button>
                </div>
            ): (
                <Button color='primary' component={Link} to='/auth'>Login</Button>
            )}
        </Toolbar>
        
        </AppBar>
    );
}

export default Navbar;
