// event.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Event = new Schema({
  event_name: {
    type: String
  },
  startDate: {
    type: Date
  }
  
},{
    collection: 'event'
});

module.exports = mongoose.model('Event', Event);