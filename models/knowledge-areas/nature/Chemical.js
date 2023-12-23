// models//knowledge-areas/nature/Chemical.js

const mongoose = require('mongoose');

const chemicalSchema = new mongoose.Schema({
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

const Chemical = mongoose.model('Chemical', chemicalSchema);

module.exports = Chemical;