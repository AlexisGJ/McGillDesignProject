require('dotenv').config();
const http = require('http');
const hostname = '127.0.0.3';
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});
server.listen(port, () => {
    console.log(`Server running!`);
});

function query(collection) {
    let MongoClient = require('mongodb').MongoClient;
    let url = process.env.DATABASE_URL;
    
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        let dbo = db.db("carowanisdb");
        dbo.collection(collection).find({}).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          db.close();   
        });
      });
}

const readingsColl = "readings";
setInterval( function() { query(readingsColl); }, 2000 );
