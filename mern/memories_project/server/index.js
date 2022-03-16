import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from './routes/posts.js';

const app = express();




app.use(bodyParser.json({
    limit: "30mb",
    extended: true
}));

app.use(bodyParser.urlencoded({
    limit: "30mb",
    extended: true
}));

app.use(cors());

app.use("/posts", postRoutes);

const CONNECTION_URL = 'mongodb+srv://807774A29A610CFA5D8F44840650D00A27506F79:pbnoL8vPYrcrak67@cluster0.5gc9b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));