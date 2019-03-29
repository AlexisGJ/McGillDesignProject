const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
require('dotenv').config()

// initialize the express app
const child = require('./routes/child.route'); // Imports routes for the child 
const reading = require('./routes/reading.route'); // Imports routes for the reading
const app = express();
app.use(cors({credentials: true, origin: true})); // Allow CORS cross-origin

// Set up mongoose connection
const mongoose = require('mongoose');
// let dev_db_url = 'mongodb://carowanis:egeege123@ds046357.mlab.com:46357/carowanisdb';
let mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.db = db;

// BodyParser setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api/child', child);
app.use('/api/reading', reading);

let port = process.env.PORT || 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});