// stuff that im importing
const express = require('express');
const path = require('path');
const fs = require('fs');
// helper objects
const PORT = 3001;
const app = express();
//middleware for the server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// routes that will manage get and post request
app.get('/', (req, res) => {
    res.sendFile('public/index.html', { root: __dirname + '/Develop' });
  });
  app.get('/notes',(req, res) => {
    res.sendFile('public/notes.html', { root: __dirname + '/Develop' })
});
  

// will start the servers
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);