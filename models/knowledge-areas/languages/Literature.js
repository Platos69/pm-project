// models//knowledge-areas/languages/Literature.js

const mongoose = require('mongoose');

const literatureSchema = new mongoose.Schema({
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

const Literature = mongoose.model('Literature', literatureSchema);

module.exports = Literature;