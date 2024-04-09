const asyncHandler = fn => (req, res, next) =>
    Promise
        .resolve(fn(req, res, next))
        .catch(next)


// function mynext(err) {
//     console.log(`${err.message} are baap re`)
// }
export default asyncHandler