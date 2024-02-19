import {createHash} from "node:crypto"
import { readFileSync, readFile } from "node:fs";
import jwt from "jsonwebtoken";

const users = []    // Simule BDD pour le stockage des utilisateurs
const role = ['admin', 'utilisateur']

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
    const payload = {
        email: user.email,
        role: user.role}

    // const token =  await jwt.sign(payload,readFile ('./.ssl/ec_private.pem'),{
    //     algorithm: 'ES256',
    //     issuer: 'info.iutparis.fr'
    // });

    const token = await res.jwtSign(payload);

    res.status(200).send({
        message: "Utilisateur identifié avec succès",
        token,
    });
}