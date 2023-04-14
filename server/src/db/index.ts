import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect(`${process.env.MONGO_URI}`);

    const db = mongoose.connection;
    db.once("open", () => console.log("Connected to Mongo DB!!"));
    db.on("error", (error) => console.error(error));
}