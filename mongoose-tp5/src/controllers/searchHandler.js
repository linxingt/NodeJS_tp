import mongoose from "mongoose";
export const searchBook = async (req, res) => {
    await mongoose.connect('mongodb://127.0.0.1:27017/NodeTP5');
}