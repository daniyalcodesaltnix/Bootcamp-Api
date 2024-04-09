import mongoose from "mongoose";

const BootcampSchema = new mongoose.Schema({})

const Bootcamp = mongoose.model('Bootcamp', BootcampSchema)

export default Bootcamp;