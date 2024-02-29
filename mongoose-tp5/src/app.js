import Fastify from "fastify"

export const build = (opts = {}) => {
    const app = Fastify(opts)

    app.register(import("./routes/routes.js"))

    return app
}




