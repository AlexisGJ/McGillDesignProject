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
        dbo.collection("readings").find({sgv: {$exists: true}}).sort({"datetime": -1}).limit(1).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          db.close();
        });
      });

    res.send(req.params);
};