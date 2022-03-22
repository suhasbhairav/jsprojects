import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const api = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      "content-type": "application/json",
    },
  });

  const [posts, setPosts] = useState(null);

  const getPosts = async () => {
    let res = await api
      .get("/posts")
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createPost = async () => {
    let data = {
      title: "New Book",
      author: "Suhas",
    };
    console.log(data);
    let res = await api
      .post("/posts", data)
      .then((res) => {
        getPosts();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deletePost = async (id) => {
    let res = await api.delete(`/posts/${id}`);
    getPosts();
  };

  const updatePost = async (id) => {
    let newAuthor = "Bhairav";
    let res = await api.patch(`/posts/${id}`, { author: newAuthor })
      .then((res) => {
        console.log(res);
        getPosts();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPosts();
  },[]);

  return (
    <div className="App">
      {posts &&
        posts.map((post) => {
          return (
            <div key={post.id}>
              {post.id}, {post.title}, {post.author}
              <button onClick={() => deletePost(post.id)}>Delete</button>
              <button onClick={() => updatePost(post.id)}>Update</button>
            </div>
          );
        })}

      <button onClick={createPost}>Create</button>
    </div>
  );
}

export default App;
