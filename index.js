import express from "express";
import bootcampRouter from "./routes/bootcamp.js"

const app = express();

app.use('/bootcamps', bootcampRouter)

app.get('/', (req, res) => {
    return res.status(200).json({ success: true })
})

app.listen(5000, console.log("App Running"))