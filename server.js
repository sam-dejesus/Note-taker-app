// Stuff that im importing
const express = require('express');
const webpage = require('./routes/webpageRoutes')
const api = require('./routes/apiRoutes')
// Helper objects
const PORT = process.env.PORT || 3001;
const app = express();
// Middleware for the server
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(webpage)
app.use(api)





// Will start the servers
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);