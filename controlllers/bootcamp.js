export const getAllBootcamps = (req, res, next) => {
    return res.status(200).json({ msg: "Get all bootcamps" })
}