'use strict';

//Application dependencies
const express = require('express');
// Load Environment Variables from the .env file
require('dotenv').config();
const cors = require('cors');

//Application setupppp
const app = express();
app.use(cors());
const PORT = process.env.PORT || 8000;


// ROUTES
app.get('/test', testHandler);
app.get('*', notFoundHandler); //Error Handler

// Routes Handlers
function testHandler(request, response) {
    response.status(200).send('ok');
}

function notFoundHandler(request, response) {
    response.status(404).send('huh????');
}

app.listen(PORT, () =>
    console.log(`listening on ${PORT}`)
);

