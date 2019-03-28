const Reading = require('../models/reading.model');

// Test endpoint
exports.test = function (req, res) {
    res.send('Greetings from the reading controller!');
};

//Get latest reading by collection number
exports.reading_details = function (req, res) {
  req.app.db.collection("readings").find({sgv: {$exists: true}}).sort({"dateString": -1}).limit(5).toArray(function(err, result) {
    if (err) throw err;
    readings = [];
    result.forEach(function(item) {
      var readingSimplified = {};
      readingSimplified['dateString'] = item.dateString;
      readingSimplified['sgv'] = item.sgv;
      readingSimplified['direction'] = item.direction;
      readingSimplified['device'] = item.device;
      readings.push(readingSimplified);
    });
    res.send(readings);
  });
};


exports.active_children_readings = function (req, res) {
  req.app.db.collection("children").find({active: {$eq: true}}).toArray(function(err, result) {
    if (err) throw err;
    
    // Get the latest 20 readings
    result.forEach(function (childrenObj, index) {

      // Get the latest battery info
      req.app.db.collection(childrenObj["collection_id"]).find({uploaderBattery: {$exists: true}}).sort({"created_at": -1}).limit(1).toArray(function(err3, result3) {
        if (err3) throw err3;

        if (result3.length > 0) {
          result[index]['battery'] = result3[0];
        }
      });

      req.app.db.collection(childrenObj["collection_id"]).find({sgv: {$exists: true}}).sort({"dateString": -1}).limit(20).toArray(function(err2, result2) {
        if (err2) throw err2;
        
        readings = [];
        result2.forEach(function(item) {
          var readingSimplified = {};
          readingSimplified['dateString'] = item.dateString;
          readingSimplified['sgv'] = item.sgv;
          readingSimplified['direction'] = item.direction;
          readingSimplified['device'] = item.device;
          readings.push(readingSimplified);
        });

        result[index]['readings'] = readings;

        if (index == result.length-1) {
          res.send(result);
        }

      });

    });

  });

};