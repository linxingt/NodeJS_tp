import mongoose from "mongoose";

const BookModel = new mongoose.Schema({
    Titre: {type: String, required: true},
    Auteur: {type: String, required: true},
    Description: {type: String, default: " "},
    Format: {
        type: String,
        enum: ["poche", "manga", "audio"],//soit « poche », « manga » ou « audio »,
        default: "poche"
    },
    //type : Number Date String
});

export const Book = mongoose.model(
    'book', BookModel, 'books');