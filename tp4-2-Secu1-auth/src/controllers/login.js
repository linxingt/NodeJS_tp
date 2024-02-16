import {createHash} from "node:crypto"
import jwtPlugin from "../plugins/jwt.js"
import Fastify from "fastify"

const users = []    // Simule BDD pour le stockage des utilisateurs
const role = ['admin', 'utilisateur']

const fastify = Fastify({ logger: true });
jwtPlugin(fastify);

export const addUser = async (req, res) => {
    const {email, password} = req.body
    const hashedPassword = createHash("sha256").update(password).digest().toString("hex")

    let user = users.find((u) => u.email === email && u.password === hashedPassword)
    if (user) {
        res.status(401).send({
            message: "Utilisateur déjà enregistré",
            user
        })
    }

    // A compléter

    const newUser = {
        email,
        password: hashedPassword,
        role: role[Math.floor(Math.random() * role.length)],
    };

    users.push(newUser);

    res.status(200).send({
        message: "Utilisateur enregistré avec succès",
        newUser,
    });
}

export const loginUser = async function (req, res) {

    // A compléter
    const {email, password} = req.body
    const hashedPassword = createHash("sha256").update(password).digest().toString("hex")

    let user = users.find((u) => u.email === email && u.password === hashedPassword)
    if (!user) {
        res.status(401).send({
            message: "Utilisateur non-identifié",
        });
    }
    // private key
    const token = await req.jwtSign({
        email: user.email,
        role: user.role
    });

    res.status(200).send({
        message: "Utilisateur identifié avec succès",
        token,
    });
}