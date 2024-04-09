import express from "express";
import { getAllBootcamps } from "../controlllers/bootcamp.js"

const router = express.Router();

// router.get('/', (req, res) => {
//     return res.status(200).json({ msg: "Get all bootcamps" })
// })
router.route('/').get(getAllBootcamps)

export default router;