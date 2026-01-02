import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoute from "./routing/auth.route.js";
import { errorHandler } from "./utils/errorHandler.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(errorHandler);
app.use(cookieParser());

app.use("/api/auth", authRoute);

export default app;
