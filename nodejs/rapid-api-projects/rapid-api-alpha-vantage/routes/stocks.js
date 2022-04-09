import express from 'express';
import {getTSIntraDay} from '../controllers/stocks.js';
const router = express.Router();

router.get('/tsIntra', getTSIntraDay);

export default router;