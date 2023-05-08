const webpage = require('express').Router();
const path = require('path');

// Routes that will manage get and post request
webpage.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

webpage.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'notes.html'));
});

module.exports = webpage;
