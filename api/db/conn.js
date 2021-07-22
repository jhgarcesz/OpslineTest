// This will take care of our database connection 

const { MongoClient } = require("mongodb");
// This will be our data base instance.
var _db;
 
module.exports = {
  connectToServer: (callback) => {
    // Setting up our mongo client 
    const client = new MongoClient(process.env.ATLAS_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    //Connecting to the database server. 
    client.connect((err, db) => {
      if (db)
      {
        _db = db.db("Opsline");
        console.log("Successfully connected to MongoDB."); 
      }

      return callback(err);
    });
  },
 
  getDb: () => _db
};
