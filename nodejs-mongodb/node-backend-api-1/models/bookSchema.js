import mongoose from "mongoose";

const book = mongoose.Schema({
    title: String,
    author: String,
    bookId: String,
    publishedDate: {
        type: Date,
        default: new Date()
    },
});

const BookSchema = mongoose.model('Book', book);
export default BookSchema; 

