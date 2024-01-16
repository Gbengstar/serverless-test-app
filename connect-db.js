const mongoose = require('mongoose');

let conn = null;

const uri = 'mongodb://localhost:27017/serverless';

async function connect_db() {
  if (conn == null) {
    conn = mongoose
      .connect(uri, {
        serverSelectionTimeoutMS: 5000,
      })
      .then(() => mongoose);

    // `await`ing connection after assigning to the `conn` variable
    // to avoid multiple function calls creating new connections
    await conn;
  }

  return conn;
}

exports.connect = (() => connect_db())();
