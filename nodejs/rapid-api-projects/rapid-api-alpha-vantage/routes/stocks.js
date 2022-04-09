import express from 'express';
import {getTSIntraDay, getTSDailyAdjusted, getTSDaily, getTSWeeklyAdjusted, getTSWeekly} from '../controllers/stocks.js';
const router = express.Router();

router.get('/tsIntra', getTSIntraDay);
router.get('/tsDailyAdjusted', getTSDailyAdjusted);
router.get('/tsDaily', getTSDaily);
router.get('/tsWeeklyAdjusted', getTSWeeklyAdjusted);
router.get('/tsWeekly', getTSWeekly);


export default router;