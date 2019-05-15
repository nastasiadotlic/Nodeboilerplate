  
/*
Configurer le module de route
*/
const express = require('express');
const router = express.Router();
//

/*
Définition du CRUD
*/

// Create item: POST
router.post('/article', (req, res) => {

  /* 
    Pour créer un article il faut une valeur pour :
    - title 
    - content
  */

  res.json({msg: 'Create Article'})
});

// read all items: GET
router.get('/article', (req, res) => {
  res.json({msg: 'Read all article'})
});

// read one item: GET
router.get('/article/:id', (req, res) => {
  res.json({msg: 'Read one article'})
});

// update one item: PUT
router.put('/article/:id', (req, res) => {

  /* 
    Pour éditer un article il faut une valeur pour :
    - title 
    - content
  */

  res.json({msg: 'update one article'})
});

// delete one item: DELETE
router.delete('/article/:id', (req, res) => {
  res.json({msg: 'delete one article'})
});


/*
Exporter le module de route
*/
module.exports = router;
//