export const errorHandler = (err, req, res, next) => {
    // console.log(err.message)
    // res.status(err.statusCode).json({ msg: err.message })
    res.status(405).json({ msg: err.message })
}