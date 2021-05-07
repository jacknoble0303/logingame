
const mongo = require('mongodb');
const express = require('express');
const app = express();
const MongoClient = mongo.MongoClient;
const port = 3000;

const connectString = 'mongodb://localhost:27017'
const dbName = 'test';
var db;

//eventually rewrite this using promises and/or async/await
MongoClient.connect(connectString, function(err, client) {
  if (err) {
    console.log("The web server still running without database support.")
  }
  else {
    console.log("Connected successfully to MongoDB server");
    db = client.db(dbName);
  }
});

app.get('/someroute', function (req, res) {
  // const collection = db.collection('myCollection');
  // collection.find({}).toArray(function(err, docs) {
  //   console.log("Found the following records");
  //   console.log(docs)
  //   res.json(docs)
  // });
  res.json("Hello Client!")
})

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
