import express from 'express';
import { getAirportsByCode } from '../controllers/airports.js';

const router = express.Router();

router.get('/airportsByCode', getAirportsByCode);


export default router;