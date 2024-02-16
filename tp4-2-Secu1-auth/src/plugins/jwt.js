import fp from 'fastify-plugin'
import fastifyJwt from "@fastify/jwt";
import { readFileSync } from "node:fs";
export default fp(async function (app, opts) {

    app.register(fastifyJwt, {
        Secret : {
            private : readFileSync ('../../.ssl/ec_private.pem'),
            public : readFileSync ('../../.ssl/ec_public.pem')
        } ,
        sign: {
            algorithm: 'ES256',
            issuer: 'info.iutparis.fr'
        },
    })

    app.listen(3000, (err, address) => {
        if (err) {
            app.log.error(err);
            app.exit(1);
        }
        app.log.info(`Server is listening on ${address}`);
    });

})