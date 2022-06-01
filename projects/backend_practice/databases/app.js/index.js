const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

const dbName = 'FruitsDB3';

const client = new MongoClient(url);
// Use connect method to connect to the server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  insertDocuments(db, function() {
    indexCollection(db, function() {
      client.close();
    });
  });
});


const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('Fruits');
    // Insert some documents
    collection.insertMany([
      {a:"sfdfsdf"}, {b: 2}, {c: 3}
    ], function(err, result) {
      assert.equal(err, null);
      //Changing this to a result that was posted on Stack overflow, hopefully this works. https://stackoverflow.com/questions/71039128/node-js-error-typeerror-cannot-read-properties-of-undefined-reading-0
      //assert.equal(3, result.result.n);
//assert.equal(3, result.ops.length);
      
      console.log("Inserted 3 documents into the collection");
      callback(result);
    });
  }

  const updateDocument = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Update document where a is 2, set b equal to 1
    collection.updateOne({ a : 2 }
      , { $set: { b : 1 } }, function(err, result) {
      //assert.equal(err, null);
      //assert.equal(1, result.result.n);
      console.log("Updated the document with the field a equal to 2");
      callback(result);
    });  
  }

  const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('Fruits');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
     // assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs)
      callback(docs);
    });
  }
  const removeDocument = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('Fruits');
    // Delete document where a is 3
    collection.deleteOne({ a : 3 }, function(err, result) {
     // assert.equal(err, null);
      //assert.equal(1, result.result.n);
      console.log("Removed the document with the field a equal to 3");
      callback(result);
    });    
  }

  const indexCollection = function(db, callback) {
    db.collection('documents').createIndex(
      { "a": 1 },
        null,
        function(err, results) {
          console.log(results);
          callback();
      }
    );
  };

