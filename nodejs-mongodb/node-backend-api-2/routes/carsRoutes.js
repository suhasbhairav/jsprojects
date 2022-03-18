import express from "express";
import {getCars, createCar, updateCar, deleteCar, findCar} from '../controllers/cars.js';


const router = express.Router();

router.get('/', getCars);
router.post('/', createCar);
router.patch('/:id', updateCar);
router.delete('/:id', deleteCar);
router.get('/:id', findCar);

export default router;