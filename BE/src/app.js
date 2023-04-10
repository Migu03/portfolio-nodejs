import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import projectsRouter from "./routes/projects";
import categoriesRouter from "./routes/categories";
import technologiesRouter from "./routes/technologies";
import userRouter from "./routes/auth";
import { connectOnlDB } from "./config/connect";

const app = express();
dotenv.config();

app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

app.use("/api", projectsRouter);
app.use("/api", categoriesRouter);
app.use("/api", technologiesRouter);
app.use("/api", userRouter);

connectOnlDB();

export const viteNodeApp = app;
