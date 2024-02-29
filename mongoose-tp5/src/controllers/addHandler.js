import { BookModel } from "../models/bookSchema.js"

export const addBook = async (req, res) => {
    const titre = req.body.titre
    const auteur = req.body.auteur
    const format = req.body.format
    req.body.desc ??= " "
    const desc=req.body.desc
    const newBook = new BookModel({
        Titre: titre,
        Auteur: auteur,
        Description: desc,
        Format: format
    });

    await newBook.save();
    return res.send('book enregistrées avec succès');
}