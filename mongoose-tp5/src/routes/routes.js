import {addBook} from "../controllers/addHandler.js"
import {searchBook} from "../controllers/searchHandler.js"
import {updateBook} from "../controllers/updateHandler.js"
import {deleteBook} from "../controllers/deleteHandler.js"
import helmet from "@fastify/helmet";

export default async (app, opts) => {
    app.register(helmet, {global: true})  // Plugin de gestion d'authentifications (oui, au pluriel)
        .after(function () {
            app.route({
                method: 'POST',
                url: '/newBook',
                handler: addBook
            })

            app.route({
                method: 'GET',
                url: '/searchBook',
                // preHandler: app.auth([app.authenticate]),
                handler: searchBook
            })

            app.route({
                method: 'PUT',
                url: '/updateBook',
                // preHandler: app.auth([app.authenticate]),
                handler: updateBook
            })

            app.route({
                method: 'DELETE',
                url: '/deleteBook',
                // preHandler: app.auth([app.authenticate]),
                handler: deleteBook
            })
        })
}







