import {addBook} from "../controllers/addHandler.js"
import {searchAllBook, searchBookByTitle} from "../controllers/searchHandler.js"
import {updateBook} from "../controllers/updateHandler.js"
import {deleteBook} from "../controllers/deleteHandler.js"
import {BookInfoSchema} from "../schemas/bookInfoSchema.js"
import {ReponseSchema} from "../schemas/reponseSchema.js";

export default async (app, opts) => {

    app.route({
        method: 'POST',
        url: '/book',
        handler: addBook,
        schema: {
            body: BookInfoSchema
        },
    })

    app.route({
        method: 'GET',
        url: '/book',
        handler: searchAllBook,
        schema: {
            response: {
                200: {
                    type: 'array',
                    items: ReponseSchema
                }
            }
        }
    })

    app.route({
        method: 'GET',
        url: '/book/:titre',
        handler: searchBookByTitle,
        schema: {
            response: {
                200: ReponseSchema
            }
        }
    })

    app.route({
        method: 'PUT',
        url: '/bookId/:id',
        handler: updateBook,
        schema: {
            body: BookInfoSchema
        },
    })

    app.route({
        method: 'DELETE',
        url: '/book',
        handler: deleteBook,
        schema: {
            body: BookInfoSchema
        },
    })

}







