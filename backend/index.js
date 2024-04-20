import express from "express";
import dotenv from "dotenv";
import dataBaseConnection from "./config/db.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoute.js";
import tweetRoutes from "./routes/tweetRoute.js";

dotenv.config({
  path: ".env",
});

dataBaseConnection();
const app = express();

// Middlewares
app.use(
  express.urlencoded({
    extends: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// route
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/tweet", tweetRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Listening At ${process.env.PORT}`);
});
