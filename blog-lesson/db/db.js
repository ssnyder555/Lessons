const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/blog';

mongoose.connect(connectionString, { useNewUrlParser: true});

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected at ', connectionString);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose');
})
