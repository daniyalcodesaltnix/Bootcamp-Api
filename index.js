import express from "express";
const app = express();


app.get('/', (req, res) => {
    res.status(200).json({ success: true })
})

app.listen(5000, console.log("App Running"))