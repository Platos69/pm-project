// models//knowledge-areas/humans/Philosophy.js

const mongoose = require('mongoose');

const philosophySchema = new mongoose.Schema({
  titleContent: {
    type: String
  },
  descriptionContent: {
    type: String
  },
  documentationsContent: {
    type: String
  },
  topics: [{
    titleTopic: {
      type: String
    },
    subjectTopic: {
      type: String
    } 
  }],
  data: {
    type: Date,
    default: Date.now(),
  }
});

const Philosophy = mongoose.model('Philosophy', philosophySchema);

module.exports = Philosophy;