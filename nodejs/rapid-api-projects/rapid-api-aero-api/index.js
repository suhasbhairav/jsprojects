import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import flightRoutes from "./routes/flights.js";

const app = express();


dotenv.config();
const PORT = process.env.PORT || 5000;
app.use(
    bodyParser.json({
        extended: true,
    })
);

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use(cors());
app.use("/flights", flightRoutes);

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
