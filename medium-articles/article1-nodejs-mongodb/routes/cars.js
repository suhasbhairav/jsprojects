import express from 'express'
import { getCars, findCar, createCar, updateCar, deleteCar } from '../controllers/cars.js';

const router = express.Router();

router.get('/', getCars);
router.get('/:id', findCar);
router.post('/', createCar);
router.patch('/:id', updateCar);
router.delete('/:id', deleteCar);

export default router;