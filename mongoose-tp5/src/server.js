const {build} = await import( "./app.js")
import connect from "./connect.js"

const app = build({logger: true})

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