import mongoose from "mongoose";
import BookSchema from "../models/bookSchema.js";

export const getBooks = async (req, res) => {
    try {
        const books = await BookSchema.find();
        console.log(books);
        res.status(200).json(books);
    } catch (error) {
        console.log(error);
        res.status(404).json({message: error.message});
    }
};

export const findBook = async (req, res) => {
    const {id: _id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No ID found');

    try {
        const book = await BookSchema.findById(_id);
        res.send(book);
    } catch (error) {
        res.status(404).send({message: error.message});
    }
    
};

export const createBook = async (req, res) => {
    const book = req.body;
    const newBook = BookSchema(book);

    try {
        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
};

export const updateBook = async (req, res) => {
    const {id: _id} = req.params;
    const book = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No ID found');

    const updatedBook = await BookSchema.findByIdAndUpdate(_id, {...book, _id}, {new: true});
    res.json(updatedBook);
};

export const deleteBook = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('NO ID found');

    await BookSchema.findByIdAndDelete(id);
    res.send({message: 'Book deleted'});
};
