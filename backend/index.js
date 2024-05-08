import express from "express";
import dotenv from "dotenv";
import dataBaseConnection from "./config/db.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoute.js";
import tweetRoutes from "./routes/tweetRoute.js";
import cors from "cors";

dotenv.config({
  path: ".env",
});

dataBaseConnection();
const app = express();

// Middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));

// route
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/tweet", tweetRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Listening At ${process.env.PORT}`);
});
