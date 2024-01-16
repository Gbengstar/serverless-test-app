const { Schema } = require('mongoose');
const { PersonModel } = require('./model');

require('./connect-db');

module.exports.handler = async (event) => {
  const person = await PersonModel.find();
  return {
    statusCode: 200,
    body: JSON.stringify(person),
  };
};
