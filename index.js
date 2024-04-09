import express from "express";
import morgan from "morgan"
import dotenv from "dotenv"

import bootcampRouter from "./routes/bootcamp.js"

dotenv.config()

const app = express();

app.use(morgan("dev"))

app.get('/', (req, res) => {
    return res.status(200).json({ success: true })
})

app.use('/bootcamps', bootcampRouter)

app.listen(5000, console.log("App Running"))