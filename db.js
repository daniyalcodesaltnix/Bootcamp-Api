import mongoose from "mongoose";
import chalk from "chalk"

export async function connectToDB() {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(chalk.blue.bold(conn.connection.host))
}