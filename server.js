// stuff that im importing
const express = require('express');
const webpage = require('./Develop/routes/webpageRoutes')
const api = require('./Develop/routes/apiRoutes')
// helper objects
const PORT = process.env.PORT || 3001;
const app = express();
//middleware for the server
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(webpage)
app.use(api)





// will start the servers
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);