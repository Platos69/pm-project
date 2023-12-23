// models//knowledge-areas/languages/Portuguese.js

const mongoose = require('mongoose');

const portugueseSchema = new mongoose.Schema({
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

const Portuguese = mongoose.model('Portuguese', portugueseSchema);

module.exports = Portuguese;