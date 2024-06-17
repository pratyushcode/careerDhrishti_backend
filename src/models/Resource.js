const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Resources schema
const resourceSchema = new Schema({
  ImageHref: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
 
  buttonHref: {
    type: String,
    required: true
  }
  
});


const Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource;
