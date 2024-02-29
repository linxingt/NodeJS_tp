import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
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

export const BookModel = mongoose.model(
    'book', BookSchema, 'books');