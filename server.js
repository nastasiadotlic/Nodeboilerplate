/*
Importer les composants serveur
*/

const express = require('express');
const path = require('path');


/*
Configuration du server
*/

// Définir les variables serveur

const server = express();
const port = 3000;

// Définition du dossier static du client
server.set( 'views', __dirname + '/www' );
server.use( express.static(path.join(__dirname, 'www')) );

/*
Lancer le server
*/

server.listen(port, () => console.log(`Server Listening on port ${port}`))