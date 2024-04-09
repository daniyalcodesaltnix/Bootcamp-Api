import express from "express";
import morgan from "morgan"
import dotenv from "dotenv"
import { connectToDB } from "./db.js";
import { errorHandler } from "./error.js";

import bootcampRouter from "./routes/bootcamp.js"

dotenv.config()

connectToDB();

const app = express();

app.use(express.json())

app.use(morgan("dev"))

app.get('/', (req, res) => {
    return res.status(200).json({ success: true })
})

app.use('/bootcamps', bootcampRouter)

app.use(errorHandler)

app.listen(5000, console.log("App Running"))