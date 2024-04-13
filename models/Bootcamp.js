import mongoose from "mongoose";

const BootcampSchema = new mongoose.Schema({
    name: String
})

BootcampSchema.pre('save', function (next) {
    console.log("saving data")
    next();
})

const Bootcamp = mongoose.model('Bootcamp', BootcampSchema)

export default Bootcamp;






















