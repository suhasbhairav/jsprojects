import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allBooks, deleteBook } from "../modules/books";
import axios from "axios";


const BookList = () => {

  const [data, setData] = useState(null);

  const callBackend = async() => {
    const result = await axios.get('http://localhost:5000/').then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error);
    })
  };


  useEffect(() => {
    callBackend();  
  }, []);
  

  return (
    <div className="row">
      <div className="col-sm-12">
        Book List
      </div>
    </div>
  );
}

export default BookList
