import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ msg: "Get all bootcamps" })
})

export default router;