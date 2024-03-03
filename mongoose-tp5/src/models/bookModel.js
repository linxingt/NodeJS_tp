import mongoose from "mongoose";

const BookModel = new mongoose.Schema({
    Titre: { type: String, required: true },
    Auteur: { type: String, required: true },
    Description : String,
    Format : {
        type: String,
        enum: ["poche", "manga", "audio"],//soit « poche », « manga » ou « audio »,
        default: "poche"
    },
    //type : Number Date String
    //required: ['Titre', 'Auteur']
});

export const Book = mongoose.model(
    'book', BookModel, 'books');