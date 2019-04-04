const mongoose = require('mongoose');
require('dotenv').config()
var moment = require('moment');
var url = process.env.MONGODB_URI;

var directions = ["Flat", "FortyFiveUp", "FortyFiveDown"];

function random_normal_sgv() {
  var u = 0, v = 0;
  while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
  while(v === 0) v = Math.random();
  let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
  num = num / 10.0 + 0.5; // Translate to 0 -> 1
  if (num > 1 || num < 0) return random_normal_sgv(); // resample between 0 and 1
  return num;
}

let populateDb = function(collectionNumber) {

  mongoose.connect(url, {useNewUrlParser: true});
  mongoose.Promise = global.Promise;
  let db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));

  console.log("Inserting Data For Child Number " + collectionNumber);
  var reading = {
      "device": "xDrip-DexcomG5",
      "date": 1547665519796,
      "dateString": moment().format(),
      "sgv": random_normal_sgv() * 200,
      "direction": directions[Math.floor(Math.random() * Math.floor(3))],
      "type": "sgv",
      "filtered": 169440,
      "unfiltered": 127504,
      "rssi": 100,
      "noise": 1
  };
  var battery = {
    "uploaderBattery" : Math.floor(Math.random() * 90 + 10),
    "created_at": moment().format(),
  }
  db.collection("testchild" + collectionNumber).insertOne(reading, function(err, res) {
    if (err) throw err;
    console.log("document inserted for reading " + collectionNumber);
    db.close();
  });
  db.collection("testchild" + collectionNumber).insertOne(battery, function(err, res) {
    if (err) throw err;
    console.log("document inserted for battery " + collectionNumber);
    db.close();
  });
}

var index = 1;
var batchSize = 10;
setInterval(function() {
  var end = index + batchSize;
  for (var i = index; i < end; i++) {
      populateDb(index);
      index++;
      if (index > 50) {
        index = 1;
      }
  }
}, 1 * 60 * 1000);

