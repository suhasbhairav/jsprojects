import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allBooks, deleteBook } from "../modules/books";

const BookList = () => {

  return (
    <div className="row">
      <div className="col-sm-12">
        Book List
      </div>
    </div>
  );
}

export default BookList
