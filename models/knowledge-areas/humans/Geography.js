// models//knowledge-areas/humans/Geography.js

const mongoose = require('mongoose');

const geographySchema = new mongoose.Schema({
  titleContent: String,
  descriptionContent: String,
  documentationsContent: String,
  topics: [{
    titleTopic: String,
    subjectTopic: String,
  }],
});

const Geography = mongoose.model('Geography', geographySchema);

module.exports = Geography;