import express from "express";
import { getFlightStatus} from "../controllers/flights.js";

const router = express.Router();

router.get("/flightStatus", getFlightStatus);

export default router;