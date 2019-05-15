/*
Importer les composants serveur
*/

require('dotenv').config();
const express = require('express');
const path = require('path');


/*
Configuration du server
*/

// Définir les variables serveur

const server = express();
const port = process.env.PORT; // voir le fichier .env

// Définition du dossier static du client
server.set( 'views', __dirname + '/www' );
server.use( express.static(path.join(__dirname, 'www')) );

/*
Lancer le server
*/

server.listen(port, () => console.log(`Server Listening on port ${port}`))