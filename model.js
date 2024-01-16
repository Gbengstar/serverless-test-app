const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: { type: String },
  age: { type: Number },
});

exports.PersonModel = model('person', schema, 'person');
