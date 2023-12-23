// models//knowledge-areas/nature/Physical.js

const mongoose = require('mongoose');

const physicalSchema = new mongoose.Schema({
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

const Physical = mongoose.model('Physical', physicalSchema);

module.exports = Physical;