import mongoose from "mongoose";

export async function connectToDB() {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(conn.connection.host)
}