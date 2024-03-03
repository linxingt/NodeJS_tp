import { Book } from "../models/bookModel.js"

export const addBook = async (req, res) => {
    let titre = req.body.titre
    let auteur = req.body.auteur
    let format = req.body.format
    req.body.desc ??= " "
    //ou schema default
    let desc=req.body.desc

    let book = await Book.findOne({
        Titre: req.body.titre,
        Auteur: req.body.auteur
    })
    if (book) {
        return res.send('book déjà enregistré')
    }

    const newBook = new Book({
        Titre: titre,
        Auteur: auteur,
        Description: desc,
        Format: format
    });

    await newBook.save();
    return res.send('book enregistré avec succès');
}