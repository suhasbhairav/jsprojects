import mongoose from "mongoose";

const car = mongoose.Schema({
    name: String,
    brand: String,
    makeYear: Number,
    launchDate: {
        type: Date,
        default: new Date()
    }
});

const CarsSchema = mongoose.model('Car', car);
export default CarsSchema;