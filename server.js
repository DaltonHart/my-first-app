// REQUIREMENTS
const express = require('express');
const app = express();

// MIDDLEWARE
app.use(express.static('public'));

// ROUTES
app.get("/pick-a-color/:name", (request, response) => {
    response.send(`You picked the color ${request.params.name}` );
  });

// SERVER START
app.listen(3000, () => {
  console.log("HTTP server listening at localhost:3000");
});