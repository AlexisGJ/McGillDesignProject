const express = require('express');
const bodyParser = require('body-parser');

// initialize the express app
const child = require('./routes/child.route'); // Imports routes for the child 
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://carowanis:egeege123@ds046357.mlab.com:46357/carowanisdb';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// BodyParser setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api/child', child);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});