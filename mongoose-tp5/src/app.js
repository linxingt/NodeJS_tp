import Fastify from "fastify"
import helmet from "@fastify/helmet";

export const build = (opts = {}) => {
    const app = Fastify(opts)

    app.register(helmet, {global: true})
    app.register(import("./routes/routes.js"))

    return app
}




