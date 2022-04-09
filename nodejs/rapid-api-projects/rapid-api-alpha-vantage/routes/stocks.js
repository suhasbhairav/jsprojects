import express from 'express';
import {getTSIntraDay, getTSDailyAdjusted, getTSDaily} from '../controllers/stocks.js';
const router = express.Router();

router.get('/tsIntra', getTSIntraDay);
router.get('/tsDailyAdjusted', getTSDailyAdjusted);
router.get('/tsDaily', getTSDaily);

export default router;