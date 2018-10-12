const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/test';

// mongodb://localhost - this is where are mongodb server is running on our computer


// test this is what we are calling our database, a db callled test is automaticly created when we connect

mongoose.connect(connectionString);

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose is disconnected');
})

mongoose.connection.on('error', (err) => {
  console.log(err, 'mongoose error');
});
