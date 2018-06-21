const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

router.get('/', (req, res) => {
  queries
    .getAll()
    .then(her_soiree =>{
      res.json(her_soiree)
    });
});

module.exports = router;
