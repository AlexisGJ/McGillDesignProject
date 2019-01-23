require('dotenv').config();
const http = require('http');
const hostname = '127.0.0.2';
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

var MongoClient = require('mongodb').MongoClient;
var url = process.env.DATABASE_URL;

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("carowanisdb");
    var query = { _id: "1" };
    dbo.collection("readings").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();   
    });
  });