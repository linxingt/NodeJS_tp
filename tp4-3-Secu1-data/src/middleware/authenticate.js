import jwt from "jsonwebtoken";
import {readFileSync} from 'fs'
export async function getAuthenticate(req, res) {
    try {
        // A compléter

        const token = req.headers.authorization;
        // const decoded = jwt.verify(token,readFileSync('../tp4-2-Secu1-auth/.ssl/ec_public.pem', 'utf-8'));
        const decoded = await req.jwtVerify();
        console.log(decoded)
        const { email, role } = decoded;
        req.user = { email, role };

    } catch (err) {
        // console.log(req.headers.authorization.replace('Bearer ', ''))
        // console.log(jwt.verify(req.headers.authorization.replace('Bearer ', ''),readFileSync('../tp4-2-Secu1-auth/.ssl/ec_public.pem')))
        res.code(401).send({...err, message: "Vous ne passerez pas !"})
    }
}