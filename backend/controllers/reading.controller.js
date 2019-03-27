// Test endpoint
exports.test = function (req, res) {
    res.send('Greetings from the reading controller!');
};

//Get latest reading by collection number
exports.reading_details = function (req, res) {
  let MongoClient = require('mongodb').MongoClient;
  let url = "mongodb://carowanis:egeege123@ds046357.mlab.com:46357/carowanisdb";
  let collectionToQuery = req.params.collectionNumber;

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("carowanisdb");
    dbo.collection("readings").find({sgv: {$exists: true}}).sort({"dateString": -1}).limit(5).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
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
      db.close();
    });
  });

};


exports.active_children_readings = function (req, res) {
  let MongoClient = require('mongodb').MongoClient;
  let url = "mongodb://carowanis:egeege123@ds046357.mlab.com:46357/carowanisdb";
  let collectionToQuery = req.params.collectionNumber;

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("carowanisdb");
    let query = [{sgv: {$exists: true}}, {"_id": 0, "type": 1, "type": 1}];

    dbo.collection("children").find({active: {$eq: true}}).toArray(function(err, result) {
      if (err) throw err;
      
      // Get the latest 20 readings
      result.forEach(function (childrenObj, index) {

        // Get the latest battery info
        dbo.collection(childrenObj["collection_id"]).find({uploaderBattery: {$exists: true}}).sort({"dateString": -1}).limit(1).toArray(function(err3, result3) {
          if (err3) throw err3;

          if (result3.length > 0) {
            result[index]['battery'] = result3[0];
          }
        });

        dbo.collection(childrenObj["collection_id"]).find({sgv: {$exists: true}}).sort({"dateString": -1}).limit(20).toArray(function(err2, result2) {
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
            db.close();
          }

        });

      });
      
      
      db.close();
    });


    // dbo.collection("readings").find({sgv: {$exists: true}}).sort({"dateString": -1}).limit(5).toArray(function(err, result) {
    //   if (err) throw err;
    //   console.log(result);
    //   readings = [];
    //   result.forEach(function(item) {
    //     var readingSimplified = {};
    //     readingSimplified['dateString'] = item.dateString;
    //     readingSimplified['sgv'] = item.sgv;
    //     readingSimplified['direction'] = item.direction;
    //     readingSimplified['device'] = item.device;
    //     readings.push(readingSimplified);
    //   });
    //   res.send(readings);
    //   db.close();
    // });

  });

};