import React, {useState} from 'react'
import useStyles from './styles';
import {TextField, Button, Typography, Paper} from "@material-ui/core";
import FileBase from "react-file-base64";

function Form() {
    const classes = useStyles();
    const handleSubmit = () => {

    };

    const clear = () => {

    };

    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''    
    });

  return (
    <Paper className={classes.paper}>
        <form autoComplete='off'
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}>

            <Typography variant="h6">
                Creating a Memory
            </Typography>
            <TextField 
            name="creator" 
            variant="outlined" 
            label="Creator" 
            value={postData.creator}
            onChange={(e) => setPostData({...postData, creator: e.target.value})}
            fullWidth/>

<TextField 
            name="title" 
            variant="outlined" 
            label="Title" 
            value={postData.title}
            onChange={(e) => setPostData({...postData, title: e.target.value})}
            fullWidth/>

            
<TextField 
            name="message" 
            variant="outlined" 
            label="Message" 
            value={postData.message}
            onChange={(e) => setPostData({...postData, message: e.target.value})}
            fullWidth/>

            
        <TextField 
            name="tags" 
            variant="outlined" 
            label="Tags" 
            value={postData.tags}
            onChange={(e) => setPostData({...postData, tags: e.target.value})}
            fullWidth/>

            <div className={classes.fileInput}>
                <FileBase
                type="file"
                multiple={false}
                onDone={({base64}) => setPostData({...postData,selectedFile: base64}) }
                />
            </div>
            <Button className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
            >Submit
            </Button>
            <Button className={classes.buttonSubmit}
            variant="contained"
            color="secondary"
            size="small"
            onClick={clear}
            fullWidth
            >Clear
            </Button>            

        </form>

    </Paper>
  )
}

export default Form;