import CustomError from "../CustomError.js"
import Bootcamp from "../models/Bootcamp.js"
import asyncHandler from "../asyncHandler.js"

export const getAllBootcamps = asyncHandler(async (req, res, next) => {
    // try {
    const bootcamps = await Bootcamp.find()
    throw new Error('error')
    return res.status(200).json({ msg: "Get all bootcamps", data: bootcamps })
    // } catch (err) {
    //     // console.log(err.message)
    //     // next(err);
    //     next(new CustomError('Something went wrong bro', 404))?
    // }
})