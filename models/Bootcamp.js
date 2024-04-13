import mongoose from "mongoose";

const BootcampSchema = new mongoose.Schema({
    name: String,
    created: {
        type: Date,
        default: Date.now
    },
    photo: {
        type: String,
        default: "default.jpg"
    }
})

BootcampSchema.pre('save', function (next) {
    console.log("saving data")
    next();
})

const Bootcamp = mongoose.model('Bootcamp', BootcampSchema)

export default Bootcamp;






















