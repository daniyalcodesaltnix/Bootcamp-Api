import CustomError from "../CustomError.js"
import Bootcamp from "../models/Bootcamp.js"
import asyncHandler from "../asyncHandler.js"

export const getAllBootcamps = asyncHandler(async (req, res, next) => {
    // try {
    const bootcamps = await Bootcamp.create(req.body)
    // const bootcamps = await Bootcamp.find()
    // throw new Error('error')
    return res.status(200).json({ msg: "Get all bootcamps", data: bootcamps })
    // } catch (err) {
    //     // console.log(err.message)
    //     // next(err);
    //     next(new CustomError('Something went wrong bro', 404))?
    // }
})

export const addPhoto = asyncHandler(async (req, res, next) => {
    // try {
    const bootcamp = await Bootcamp.findById(req.params.id)
    // const bootcamps = await Bootcamp.find()
    // throw new Error('error')
    console.log(req.files.file)

    req.files.file.mv(process.env.upload_path + req.files.file.name)
    bootcamp.image = req.files.file.name
    bootcamp.save()
    return res.status(200).json({ msg: "Done upoad", data: bootcamp })
    // } catch (err) {
    //     // console.log(err.message)
    //     // next(err);
    //     next(new CustomError('Something went wrong bro', 404))?
    // }
})