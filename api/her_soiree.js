const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

function validSoiree(her_soiree){
  return typeof her_soiree.title == 'string' &&
typeof her_soiree.organizer_name == 'string' &&
typeof her_soiree.organizer_website_url == 'string' && typeof her_soiree.event_type == 'string' &&
typeof her_soiree.event_topic == 'string' &&
typeof her_soiree.description == 'string' &&
typeof her_soiree.venue_name == 'string' &&
typeof her_soiree.street_address == 'string' && typeof her_soiree.city == 'string' &&
typeof her_soiree.state == 'string' &&
typeof her_soiree.zipcode == 'string' &&
typeof her_soiree.participant_age == 'string' && typeof her_soiree.event_start_time == 'string' && typeof her_soiree.event_finish_time == 'string' && typeof her_soiree.event_frequency == 'string' && typeof her_soiree.dress_code == 'string'&&
typeof her_soiree.event_flyer_url == 'string' &&
!isNaN(her_soiree.event_price) }


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




router.post('/', (req, res, next) =>{
  if(validSoiree(req.body)){
    const { title, organizer_name,
    organizer_website_url,
    event_type,
    event_topic,
    description,
    venue_name,
    street_address,
    city,
    state,
    zipcode,
    participant_age,
    event_start_time,
    event_finish_time,
    event_frequency,
    dress_code,
    event_price,
    event_flyer_url } = req.body;
    const her_soiree = {
      title,
      organizer_name,
      organizer_website_url,
      event_type,
      event_topic,
      description,
      venue_name,
      street_address,
      city,
      state,
      zipcode,
      participant_age,
      event_start_time,
      event_finish_time,
      event_frequency,
      dress_code,
      event_price,
      event_flyer_url
    };
    queries
      .create(her_soiree)
      .then(id => {
        res.json({
          id
        });
      });
  } else {
    const error = new Error('Invalid Soiree');
    next(error);
  }
});








module.exports = router;
