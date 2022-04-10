import express from "express";
import {get52WeekHigh, get52WeekLow} from '../controllers/nse.js';

const app = express.Router();

app.get('/yearlyWeekLow', get52WeekLow);
app.get('/yearlyWeekHigh', get52WeekHigh);

export default app;