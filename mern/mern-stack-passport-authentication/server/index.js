import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import logger from "morgan";
import passport from './Auth/index.js';
import Authentication from "./routes/Auth/index.js";
import User from "./routes/User/index.js";

const app = express();

dotenv.config();

app.use(
  bodyParser.json({
    limit: "30mb",
    extended: true,
  })
);

app.use(
  bodyParser.urlencoded({
    limit: "30mb",
    extended: true,
  })
);


app.use(logger("dev"));

app.use(passport.initialize());
app.use(passport.session());
app.use("/auth", Authentication);
app.use("/user", User);
app.use(cors());



const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.port || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

