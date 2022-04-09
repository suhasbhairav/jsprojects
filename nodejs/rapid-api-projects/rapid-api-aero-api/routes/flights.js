import express from "express";
import { getFlightDepartures, getFlightStatus} from "../controllers/flights.js";

const router = express.Router();

router.get("/flightStatus", getFlightStatus);
router.get('/flightDepartureDates', getFlightDepartures);

export default router;