// Require express - gives us back a function
const express = require('express');

// Create an instance of express by calling the function
// gives us back an object
const app = express();
const port = process.env.PORT || 5001; // Used to direct traffic
const makeMoney = require('./generateMoney');

app.use(express.static('public'));

app.get('/currency', (req, res) => {
  res.send(makeMoney());
});

// Start up the server
app.listen(port, () => {
  console.log('listening on port', port);
});
