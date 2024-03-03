import {Book} from "../models/bookModel.js"

export const updateBook = async (req, res) => {
    // console.log(req.params)
    // console.log(req.body)
    try {
        let resu = await Book.updateOne(
            {_id: req.params.id},
            {
                $set: {
                    Titre: req.body.titre,
                    Auteur: req.body.auteur,
                    Description: req.body.desc,
                    Format: req.body.format
                }
            }
        ).exec()
        console.log(resu)
        if (resu.modifiedCount > 0)
            return res.send('book update avec succès');
        else if (resu.matchedCount > 0 && resu.modifiedCount === 0)
            return res.send('pas de modification')
        else if (resu.matchedCount === 0)
            return res.send('pas de book correspondant')
        return res.send('book update raté');
    } catch (error) {
        console.error(error);
        res.send('book update erroné');
    }
}