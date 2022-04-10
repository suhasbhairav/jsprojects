import express from "express";
import {get52WeekHigh, get52WeekLow, getEquityStockIndex} from '../controllers/nse.js';

const app = express.Router();

app.get('/yearlyWeekLow', get52WeekLow);
app.get('/yearlyWeekHigh', get52WeekHigh);
app.get('/equityStockIndex', getEquityStockIndex);

export default app;