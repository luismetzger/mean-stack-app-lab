'user stric'

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// dummy json data to render for testing
const taqueria = [
  {name: "La Taqueria"},
  {name: "El Farolito"},
  {name: "Taqueria Cancun"}
];

// Middleware
app.use(function(req, res, next) {
  console.log("Middleware hit!");
  console.log("%s request to %s", req.method, req.path);
  next();
});

// creating a dummyController to test dummy json data
function dummyController(req, res) {
  res.send(taqueria);
}

// serve static files from the public directory
app.use(express.static('public'));



// serving the dummyController on the /api route
app.get('/api/taquerias', dummyController);

// start server
app.listen(PORT, function() {
  console.log('Server running on port' + PORT);
});
