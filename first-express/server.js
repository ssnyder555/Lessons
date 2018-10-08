const express = require('express');
// creat our application
const app   = express();
// app is an object
// whitch has methods for listing
// and responds back to requests


// express is a function that when
// called produces an object that allows
// us to create a server
// remeber express is a framework
// it has inherent architure


// set up a get request listiner
// just the slash is the localhost:3000
// aka the home page or first route
app.get('/', (request, response) => {
  response.send('this is the server responding, to request')
});


// keep the port between 3000 and 9000
app.listen(3000, () => {
  console.log('server is listening, on port 3000')
});
