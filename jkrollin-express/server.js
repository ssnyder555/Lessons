const express = require('express');
const app = express();

app.get('/', (req, res) => {
   res.send('we be rollin');
})

const jkRollin = ['Mariana', 'Jawad', 'alexander', 'julian', 'christiane', 'stephen', 'mirza', 'ben', 'sha']

app.get('/jkRollin', (req, res) => {
  res.send(jkRollin)
})

app.get('/jkRollin/:index', (req, res) => {
  console.log(req.params);
  res.send(jkRollin[req.params.index])
})





app.listen(3000, (req, res) => {
  console.log('listening to port 3000');
})
