import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import stocks from './routes/stocks.js';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(
    bodyParser.json({
        extended:true
    })
);

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.use(cors());

app.use('/stocks', stocks);

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));