import Bootcamp from "../models/Bootcamp.js"

export const getAllBootcamps = async (req, res, next) => {
    const bootcamps = await Bootcamp.find()
    return res.status(200).json({ msg: "Get all bootcamps", data: bootcamps })
}