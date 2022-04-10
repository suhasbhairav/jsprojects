import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import nse from './routes/nse.js';

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

app.use('/nse', nse);

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));

