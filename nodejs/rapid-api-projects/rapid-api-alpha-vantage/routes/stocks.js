import express from 'express';
import {getTSIntraDay, getTSDailyAdjusted} from '../controllers/stocks.js';
const router = express.Router();

router.get('/tsIntra', getTSIntraDay);
router.get('/tsDailyAdjusted', getTSDailyAdjusted);

export default router;