import mongoose from "mongoose";
import CarsSchema from "../models/carsSchema.js";

export const getCars = async (req, res) => {
    try {
       const cars = await CarsSchema.find();
       res.status(200).json(cars); 
    } catch (error) {
        console.log(error);
    }
};

export const createCar = async (req, res) => {
    const car = req.body;
    const newCar = CarsSchema(car);
    try {
        await newCar.save();
        res.status(201).json(newCar);
    } catch (error) {
        console.log(error);
    }
};

export const findCar = async (req, res) => {
    const {id: _id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No ID');

    try {
        const car = await CarsSchema.findById(_id);
        res.send(car); 
    } catch (error) {
        console.log(error);
    }    
};

export const deleteCar = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No ID');

    try {
        await CarsSchema.findByIdAndDelete(id);
        res.send({message: 'Car Deleted'});
    } catch (error) {
        console.log(error);
    }
};

export const updateCar = async (req, res) => {
    const {id: _id} = req.params;
    const car = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No ID');
    try {
        const updatedCar = await CarsSchema.findByIdAndUpdate(_id, {...car, _id}, {new: true});
        res.send(updatedCar);
    } catch (error) {
        console.log(error);
    }
};

