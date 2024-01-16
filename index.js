const { Schema } = require('mongoose');
const { PersonModel } = require('./model');

require('./connect-db');

module.exports.handler = async (event) => {
  const person = await PersonModel.create(JSON.parse(event.body));
  return {
    statusCode: 200,
    body: JSON.stringify(person),
  };
};
