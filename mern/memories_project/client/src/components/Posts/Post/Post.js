import React from 'react'
import useStyles from './styles'
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from "@material-ui/core";
import moment from "moment";
import ThumbUpAlt from "@material-ui/icons/ThumbUpAlt"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHoriz from '@material-ui/icons/MoreHoriz';
 function Post({ post, setCurrentId }) {


  const classes = useStyles();  
  return (
    <Card className={classes.card}>
        <CardMedia title={post.title} className={classes.media} image={post.selectedFile}/>
        <div className={classes.overlay}>
            <Typography variant="h6">
                {post.creator}
            </Typography>
            <Typography variant="body2">
                {moment(post.createdAt).fromNow()}
            </Typography>
        </div>
        <div className={classes.overlay2}>
            <Button onClick={() => setCurrentId(post._id)} style={{color: 'white'}} size='small'>
                <MoreHorizIcon/>
            </Button>

        </div>
        <div className={classes.details}>
            <Typography variant="body2" color="textSecondary">
                {post.tags.map((tag) => `#${tag} `)}
            </Typography>
        </div>
        <Typography variant="h5" className={classes.title} gutterBottom>
                {post.title}
            </Typography>
        <CardContent>
        <Typography variant="h5"  gutterBottom>
                {post.message}
            </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
            <Button size='small' color='primary' onClick={() => {}}>
                <ThumbUpAlt/>
                {post.likeCount}
            </Button>
            <Button size='small' color='primary' onClick={() => {}}>
                <DeleteIcon/>
            </Button>
        </CardActions>
    </Card>
  )
}

export default Post