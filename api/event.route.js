// event.route.js

const express = require('express');
const eventRoutes = express.Router();

// Require Event model in our routes module
let Event = require('./event.model');

// Defined store route
eventRoutes.route('/add').post(function (req, res) {
  let event = new Event(req.body);
  event.save()
    .then(event => {
      res.status(200).json({'event': 'event is added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
eventRoutes.route('/').get(function (req, res) {
    Event.find(function(err, events){
    if(err){
      console.log(err);
    }
    else {
      res.json(events);
    }
  });
});



eventRoutes.route('/delete/:id').get(function (req, res) {
    Event.findByIdAndRemove({_id: req.params.id}, function(err, event){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});


module.exports = eventRoutes; 
