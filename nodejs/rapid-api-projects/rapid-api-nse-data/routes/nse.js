import express from "express";
import {get52WeekLow} from '../controllers/nse.js';

const app = express.Router();

app.get('/yearlyWeekLow', get52WeekLow);

export default app;