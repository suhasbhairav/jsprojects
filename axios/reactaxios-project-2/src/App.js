import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [comments, setComments] = useState(null);

  const api = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      'content-type': 'application/json'
    }
  });

  const getComments = async () => {
    await api.get('/comments').then(res => {
      setComments(res.data);
    }).catch(err => {
      console.log(err);
    });
  };

  const createComment = async () => {
    let data = {"postId": 1, "body": 'New Comment'.concat(Math.random().toString())};

    await api.post('/comments', data).then(res => {
      console.log(res.status);
      getComments();
    }).catch(err => {
      console.log(err);
    });
  };

  const deleteComment = async (id) => {
    await api.delete(`/comments/${id}`).then(res => {
      console.log(res.status);
      getComments();
    }).catch(err => {
      console.log(JSON.stringify(err));
    });
  };

  const updateComment = async (id) => {
    let data = {'body': Math.random().toString()};
    let res = await api.patch(`/comments/${id}`, data).then(res => {
      console.log(res.status);
      getComments();
    }).catch(err => {
      console.log(JSON.stringify(err));
    });
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="App">
      <h1>React Axios</h1>
      <div>Add: <button onClick={createComment}>Create</button></div>
      {comments && comments.map(comment => {
        return <div key={comment.id}>
          {comment.id}, {comment.body}.{comment.postId}
          <button onClick={() => deleteComment(comment.id)}>Delete</button>
          <button onClick={() => updateComment(comment.id)}>Update</button>
        </div>
      })}
    </div>
  );
}

export default App;
