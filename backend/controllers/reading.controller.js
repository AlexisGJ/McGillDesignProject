const Reading = require('../models/reading.model');
var moment = require('moment');

// Test endpoint
exports.test = function (req, res) {
    res.send('Greetings from the reading controller!');
};

//Get latest reading by collection number
exports.reading_details = async function (req, res) {

  var collection_id = req.params.collectionNumber;
  var hoursBefore = req.params.hoursBefore;

  var oneHourDate = moment().subtract(hoursBefore, 'hours').format();

  var latest_readings = await req.app.db.collection(collection_id).find({$and: [{sgv: {$exists: true}}, {dateString: {$gte: oneHourDate}}]}).sort({"dateString": -1}).toArray();

  readings = [];
  latest_readings.forEach(function(item) {
    var readingSimplified = {};
    readingSimplified['dateString'] = item.dateString;
    readingSimplified['sgv'] = item.sgv;
    readingSimplified['direction'] = item.direction;
    readingSimplified['device'] = item.device;
    readings.push(readingSimplified);
  });

  res.send(readings);

};


exports.active_children_readings = async function (req, res) {

  var active_children = await req.app.db.collection("children").find({active: {$eq: true}}).toArray();

  var oneHourDate = moment().subtract(1, 'hours').format();

  for(var i=0; i<active_children.length; i++) {

    // Get the latest battery status update
    var latest_battery_update = await req.app.db.collection(active_children[i]["collection_id"]).find({uploaderBattery: {$exists: true}}).sort({"created_at": -1}).limit(1).toArray();
    if (latest_battery_update.length > 0) {
      active_children[i]['battery'] = latest_battery_update[0];
    }

    // Get the latest readings
    var latest_readings = await req.app.db.collection(active_children[i]["collection_id"]).find({$and: [{sgv: {$exists: true}}, {dateString: {$gte: oneHourDate}}]}).sort({"dateString": -1}).toArray();

    readings = [];
    latest_readings.forEach(function(item) {
      var readingSimplified = {};
      readingSimplified['dateString'] = item.dateString;
      readingSimplified['sgv'] = item.sgv;
      readingSimplified['direction'] = item.direction;
      readingSimplified['device'] = item.device;
      readings.push(readingSimplified);
    });

    active_children[i]['readings'] = readings;

  }

  res.send(active_children);

};