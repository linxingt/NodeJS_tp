import Fastify from "fastify"
import {readFileSync} from "node:fs"
import fastifyBasicAuth from "@fastify/basic-auth"


const port = 3000;
const authenticate = {realm: 'Westeros'}

const fastify = Fastify({
    logger: true,
    https: {
        key:readFileSync('./server.key'),
        cert: readFileSync('./server.crt')
    }
})

fastify.register(fastifyBasicAuth, {
    validate,
    authenticate
})

async function validate(username, password, req, reply) {
    if (username !== 'Tyrion' || password !== 'wine') {
        return new Error('Winter is coming')
    }
}

fastify.get('/dmz', {}, (req, res) => {
    res.send({replique: "Ca pourrait être mieux protégé..."})
})

// after() => effectuer actions après requête traitée par le serveur.
// inclure des manipulations / envois de réponse supplémentaires.
fastify.after(() => {
    fastify.route({
        method: 'GET',
        url: '/secu',
        onRequest: fastify.basicAuth,
        handler: async (req, reply) => {
            return {
                replique: 'Un Lannister paye toujours ses dettes !'
            };
        }
    });
    fastify.route({
        method: 'GET',
        url: '/autre',
        auth: false,
        handler: async (req, reply) => {
            return {
                replique: 'autre accessible sans authentification.!'
            }
        }
    })
})

fastify.setErrorHandler(function (err, req, reply) {

    if (err.statusCode === 401) {
        console.log(err)
        reply.code(401).send({replique: 'Tu ne sais rien, John Snow..'})
    }
    reply.send(err)
})

fastify.listen({port}, function (err, address) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }

    fastify.log.info(`Fastify is listening on port: ${address}`);
});


// 1. Créer une nouvelle clé RSA de 2048 bits appelé server.key.
//     openssl genpkey -algorithm RSA -out server.key -aes256
// --pwd.length()>3, 123456lin
// echo %cd%
// --voir où se trouve mon server.key
//
// 2. Créer un fichier de Certificate Signing Request
// openssl req -new -key server.key -out server.csr
//
// 3. effectuer la signature avec votre clé privée
// openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt
//
// 4. tester le certificat généré
// openssl s_server -accept 4567 -cert server.crt -key server.key -www -state
// --https://localhost:4567/
