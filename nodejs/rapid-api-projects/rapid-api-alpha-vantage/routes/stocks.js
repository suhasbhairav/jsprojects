import express from "express";
import {
  getTSIntraDay,
  getTSDailyAdjusted,
  getTSDaily,
  getTSWeeklyAdjusted,
  getTSWeekly,
  getTSMonthlyAdjusted,
  getTSMonthly,
  getFXMonthly,
  getFXWeekly,
  getFXDaily,
  getCurrencyExchangeRate,
  getCryptoMonthly,
  getCryptoWeekly,
  getCryptoDaily,
  getCryptoCurExchangeRate,
  getTechIndicators
} from "../controllers/stocks.js";
const router = express.Router();

router.get("/tsIntra", getTSIntraDay);
router.get("/tsDailyAdjusted", getTSDailyAdjusted);
router.get("/tsDaily", getTSDaily);
router.get("/tsWeeklyAdjusted", getTSWeeklyAdjusted);
router.get("/tsWeekly", getTSWeekly);
router.get("/tsMonthlyAdjusted", getTSMonthlyAdjusted);
router.get("/tsMonthly", getTSMonthly);
router.get("/fxMonthly", getFXMonthly);
router.get("/fxWeekly", getFXWeekly);
router.get("/fxDaily", getFXDaily);
router.get("/curExRate", getCurrencyExchangeRate);
router.get("/cryptoMonthly", getCryptoMonthly);
router.get("/cryptoWeekly", getCryptoWeekly);
router.get("/cryptoDaily", getCryptoDaily);
router.get("/cryptoCurExRate", getCryptoCurExchangeRate);
router.get("/techIndicators", getTechIndicators);

export default router;
