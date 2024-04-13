import express from "express";
import morgan from "morgan"
import dotenv from "dotenv"
import jwt from "jsonwebtoken"
import chalk from "chalk"
import path from "path"
import fileUpload from "express-fileupload";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import xss from "xss-clean"

import { connectToDB } from "./db.js";
import { errorHandler } from "./error.js";

import bootcampRouter from "./routes/bootcamp.js"

dotenv.config()

connectToDB();

const app = express();
// app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/public', express.static(join(__dirname, 'public')));

app.use(express.json())

console.log(path.join(__dirname, 'public'))
// app.use(express.static('./public/'))

app.use(xss())

app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
}));

app.use(morgan("dev"))

app.get('/', (req, res) => {
    return res.status(200).json({ success: true })
})

app.use('/bootcamps', bootcampRouter)

app.use(errorHandler)

app.listen(5000, console.log(chalk.red("App Running")))

// const token = jwt.sign({ id: 1, exp: Math.floor(Date.now() / 1000) + 60 }, 'secret123')
// const decoded = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZXhwIjoxNzEyNzM1ODQwLCJpYXQiOjE3MTI3MzU3ODB9.qVnwdOC6iGJBCXFdHRr6h2la4rlkch_UVF5S3A8Nzwk", 'secret123')

// console.log(decoded)
// console.log(Date.now())