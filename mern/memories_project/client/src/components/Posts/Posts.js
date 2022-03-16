import React from 'react';
import Post from './Post/Post';
import useStyles from './styles';
import { useSelector } from 'react-redux';

function Posts() {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);

    console.log(posts);
  return (
     <> 
    <div>Posts</div>
        <Post />
        <Post />
    </>
  )
}

export default Posts