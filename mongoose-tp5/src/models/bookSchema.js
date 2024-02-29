import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    Titre: { type: String, required: true },
    Auteur: { type: String, required: true },
    Description : String,
    Format : String //soit « poche », « manga » ou « audio »,
    //Number Date String
});

module.exports = mongoose.model(
    'book', BookSchema, 'books');