// console.log("Je suis Marvel")


import express from 'express';
import {getData} from './api.js';

import fastify from 'fastify';
import handlebars from 'handlebars';
import fastifyView from '@fastify/view';

import dotenv from 'dotenv';

dotenv.config();

const PORT = 3000;

const app = express();

// Define a route to fetch Marvel API data
app.get('/marvel-data', async (req, res) => {
    const marvelEndpoint = 'https://gateway.marvel.com:443/v1/public/characters';

    try {
        // Fetch Marvel API data using getData function from api.js
        const personnage = await getData(marvelEndpoint);

        // Send the fetched data as the response
        res.json(personnage);
    } catch (error) {
        console.error('Error in fetching Marvel data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
// app.listen(PORT,  () => {
app.listen(PORT, '0.0.0.0',() => {
    console.log(`Server is running on port ${PORT}`);
});