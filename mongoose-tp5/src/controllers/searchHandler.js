import {Book} from "../models/bookModel.js"

export const searchAllBook = async (req, res) => {
    try {
        // console.log(req.body)
        // console.log(req.value)
        // console.log(req.params)
        let books = await Book.find().exec();
        // console.log(books)
        return res.send(books.length > 0 ? books : '0 book in database');
    } catch (e) {
        return res.send('search book erroné');
    }

}

export const searchBookByTitle = async (req, res) => {
    try {
        // console.log(req.body)
        // console.log(req.value)
        // console.log(req.params)
        let book = await Book.findOne(
            {
                Titre: req.params.titre
            }).exec();
        return res.send(book ? book : 'find 0 book');
    } catch (e) {
        return res.send('search book erroné');
    }

}