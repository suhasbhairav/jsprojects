import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { allBooks } from '../modules/books';

const BookDetails = () => {

  return (
    <div className="row">
      <div className="col-sm-12">
        Book Details
      </div>
    </div>
  )
}

export default BookDetails
