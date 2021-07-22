const express = require('express');
const dbo = require("./db/conn")
const app = express(); 
require("dotenv").config({ path: "./config.env" });

app.use(express.json());
app.use(require("./controllers/vulnerability"));

const port = process.env.PORT || 5000;

// Displaying a message indicating that the server is up and running. 
// and we are connecting to the database.
app.listen(port, () => {
    dbo.connectToServer((err) => {
        if (err) console.error(err);
    });
    
    console.log(`Listening on port ${port}`)
});
