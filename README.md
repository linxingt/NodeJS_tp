# NodeJS\_tp 

Ce dépôt regroupe une série de travaux pratiques réalisés dans le cadre du BUT Informatique, pour l’UE R6.A.05 – Développement Avancé.
Chaque TP est basé sur un énoncé fourni par l’enseignant [Laurent Giustignano](https://github.com/laurentgiustignano).
Les exercices explorent différents aspects du développement backend avec Node.js : API REST, sécurité (authentification, JWT, HTTPS), traitement distribué (Kafka, Redis), conteneurisation Docker, et interaction avec des bases de données comme MongoDB.

## Organisation des TPs

| Dossier / Fichier        | Sujet / Description                                                                    |
| ------------------------ | -------------------------------------------------------------------------------------- |
| [`Marvels-tp2`](/Marvels-tp2)          | Consommation d’une API REST Marvels avec authentification, Fastify, Handlebars, Docker |                                                      |
| [`hachage-tp1`](/hachage-tp1)          | Simulation d’une blockchain avec ajout et hachage de blocs SHA256                      |                      |
| [`mongoose-tp5`](/mongoose-tp5)          | API CRUD sécurisée (HTTPS, JWT) pour des livres avec Fastify et Mongoose (MongoDB)     |
| [`tp3-1-prod-red-panda`](/tp3-1-prod-red-panda) | Producteur de messages vers RedPanda dans le cadre d’un système d’analyse de mots      |                                         |
| [`tp3-2`](/tp3-2)                | Consommateur Kafka recevant les messages, découpant les mots, et comptant leur fréquence                               |
| [`tp3-3-occurence-mots`](/tp3-3-occurence-mots) | Visualisation temps réel des mots les plus fréquents via Redis + interface React (fourni)              |
| [`tp4-1-Secu1`](/tp4-1-Secu1)           | Service web avec authentification basique (Fastify Basic Auth)                         |
| [`tp4-2-Secu1-auth`](/tp4-2-Secu1-auth)      | Génération de JWT avec signature ECDSA (Fastify, ES256)                                |
| [`tp4-3-Secu1-data`](/tp4-3-Secu1-data)      | Vérification de JWT + contrôle des rôles utilisateurs (admin/user)                 |

## Technologies utilisées

* Node.js (`fs`, `crypto`, `http`, `dotenv`, `uuid`, etc.)
* Fastify, Handlebars, Mongoose
* RedPanda (KafkaJS), Redis
* Docker & Docker Compose
* HTTPS, JWT (ES256), SHA256/MD5
* Gestion d'authentification (Basic, JWT)
