import mongoose from "mongoose";

export const addBook = async (req, res) => {
    await mongoose.connect('mongodb://127.0.0.1:27017/NodeTP5');
}