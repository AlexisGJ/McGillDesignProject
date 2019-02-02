const express = require('express');
const bodyParser = require('body-parser');

// initialize the express app
const child = require('./routes/child.route'); // Imports routes for the child 
const app = express();

app.use('/api/child', child);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});