import fp from 'fastify-plugin'
import fastifyJwt from "@fastify/jwt";
import { readFileSync } from "node:fs";
export default fp(async function (app, opts) {

    app.register(fastifyJwt, {
        secret : {
            private : readFileSync ('./.ssl/ec_private.pem'),
            public : readFileSync ('./.ssl/ec_public.pem')
        } ,
        sign: {
            algorithm: 'ES256',
            issuer: 'info.iutparis.fr'
        }
    })

    // export function signToken(payload) {
    //     return app.jwt.sign(payload);
    // }
    //
    // export function verifyToken(token) {
    //     return app.jwt.verify(token);
    // }
})
