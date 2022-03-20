import React from "react";
import {Container, Grow, AppBar, Typography, Row, Grid} from '@material-ui/core';
import useStyles from './styles';

function Navbar() {
    const classes = useStyles();

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">
            Memories
        </Typography>
        </AppBar>
    );
}

export default Navbar;
