import {Book} from "../models/bookModel.js"

export const deleteBook = async (req, res) => {
    try {
        let book = await Book.findOne({
            Titre: req.body.titre,
            Auteur: req.body.auteur
        })
        if (book) {
            const deletedBook = await Book.deleteOne(
                {
                    Titre: req.body.titre,
                    Auteur: req.body.auteur
                })
            if (deletedBook.deletedCount > 0) {
                return res.send('book supprimé avec succès');
            }
            return res.send('book supprimé raté');
        }
        return res.send('book non existe');
    } catch (error) {
        console.error(error);
        res.send('book supprimé erroné');
    }
}