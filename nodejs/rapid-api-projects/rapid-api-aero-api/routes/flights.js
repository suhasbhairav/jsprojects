import express from "express";
import { getFlightDepartures, getFlightStatus, getFlightDelayStats} from "../controllers/flights.js";

const router = express.Router();

router.get("/flightStatus", getFlightStatus);
router.get('/flightDepartureDates', getFlightDepartures);
router.get('/flightDelayStats', getFlightDelayStats);

export default router;