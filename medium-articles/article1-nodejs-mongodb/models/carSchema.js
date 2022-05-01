import mongoose from "mongoose";
const car = mongoose.Schema({
    id: String,
    carname: String,
    manufacturer: String,

});

const CarSchema = mongoose.model('Car', car);
export default CarSchema;