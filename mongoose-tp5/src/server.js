const {build} = await import( "./app.js")
import connect from "./connect.js"
import {readFileSync} from "node:fs"

const app = build({
    logger: true,
    https: {
        key:readFileSync('./secu/server.key'),
        cert: readFileSync('./secu/server.crt')
    }
})

const start = async () => {
    try {
        await connect
        await app.listen({port: 3000})
    } catch (err) {
        app.log.error(err)
        process.exit(1)
    }
}
start()