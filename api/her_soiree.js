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

router.get('/:id', (req, res, next) => {
  if(!isNaN(req.params.id)){
    queries
      .getOne(req.params.id)
      .then(her_soiree => {
        if(her_soiree){
          res.json(her_soiree);
      }else{
        next();
      }
    });
  } else{
    const error = new Error('Invalid Id');
    next(error);
  }
});


module.exports = router;
