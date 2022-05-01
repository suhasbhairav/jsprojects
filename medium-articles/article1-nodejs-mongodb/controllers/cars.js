import mongoose from 'mongoose'
import CarSchema from '../models/carSchema.js'

export const getCars = async (req, res) => {
    try {
        const cars = await CarSchema.find();
        console.log(cars);
        res.status(200).json(cars);
    } catch (error) {
        console.log(error);
        res.status(404).json(error.message);
    }
};

export const findCar = async (req, res) => {
    const {id: _id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json('No ID found');
  
    try {
        const car = await CarSchema.findById(_id);
        console.log(car);
        res.status(200).json(car);
    } catch (error) {
        console.log(error)
        res.status(404).json(error.message);
    }
};

export const createCar = async (req, res) => {
    const car = req.body;
    const newCar = CarSchema(car);
    try {
        await newCar.save();
        res.status(201).json(newCar);
    } catch (error) {
        console.log(error);
        res.status(409).json(error.message);
    }

};

export const updateCar = async (req, res) => {
    const {id: _id} = req.params;
    const car = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json('No ID found');

    try {
        const updatedCar = await CarSchema.findByIdAndUpdate(_id, {...car, _id}, {new: true});
        res.status(201).json(updatedCar);
    } catch (error) {
        console.log(error)
        res.status(404).json(error.message);
    }
};

export const deleteCar = async (req, res) => {
    const {id: _id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json('No ID found');

    try {
        await CarSchema.findByIdAndDelete(_id);
        res.status(201).json('Deleted ID successfully');
    } catch (error) {
        console.log(error);
        res.status(404).json(error.message);
    }
};