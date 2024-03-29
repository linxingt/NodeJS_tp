import fp from 'fastify-plugin'
import fastifyJwt from "@fastify/jwt";
import {readFileSync, readFile} from 'fs'

export default fp(async function (app, opts) {

    app.register(fastifyJwt, {
        secret: {
            private: readFile('../tp4-2-Secu1-auth/.ssl/ec_private.pem'), // Provide the path to your private key
            public: readFile('../tp4-2-Secu1-auth/.ssl/ec_public.pem'),   // Provide the path to your public key
        },
        sign: {
            algorithm: 'ES256', // Use the appropriate algorithm for your keys
            issuer: 'info.iutparis.fr',
        }
    });

})