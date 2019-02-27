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
      
      result.forEach(function (childrenObj, index) {

        dbo.collection("readings").find({sgv: {$exists: true}}).sort({"dateString": -1}).limit(20).toArray(function(err2, result2) {
          if (err2) throw err2;
          console.log(result2);
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