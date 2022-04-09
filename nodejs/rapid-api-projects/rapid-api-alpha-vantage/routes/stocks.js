import express from "express";
import {
  getTSIntraDay,
  getTSDailyAdjusted,
  getTSDaily,
  getTSWeeklyAdjusted,
  getTSWeekly,
  getTSMonthlyAdjusted,
  getTSMonthly,
} from "../controllers/stocks.js";
const router = express.Router();

router.get("/tsIntra", getTSIntraDay);
router.get("/tsDailyAdjusted", getTSDailyAdjusted);
router.get("/tsDaily", getTSDaily);
router.get("/tsWeeklyAdjusted", getTSWeeklyAdjusted);
router.get("/tsWeekly", getTSWeekly);
router.get("/tsMonthlyAdjusted", getTSMonthlyAdjusted);
router.get("/tsMonthly", getTSMonthly);

export default router;
