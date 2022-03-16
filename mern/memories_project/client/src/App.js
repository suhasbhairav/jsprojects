import React, {useState, useEffect} from 'react';
import {Container, Grow, AppBar, Typography, Row, Grid} from '@material-ui/core';
import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';


const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch]);
  

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" 
      color="inherit">
        <Typography variant="h2" align='center'>Memories</Typography>

      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" 
          alignItems="stretch"
          spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId = {currentId} setCurrentId={setCurrentId}  />
            </Grid>
          </Grid>
        </Container>
      </Grow>

    </Container>
  )
}

export default App;