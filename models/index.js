// Import dependencies
const mongoose = require("mongoose");
const Comedian = require("./comedian.js");

// Config
const mongoURI = "mongodb://localhost:27017/learn";
const db = mongoose.connection;

// Connect
mongoose.connect(mongoURI, ()=>{
    console.log("Connection to Mongo DB established.");
    
});

(async()=>{
    await Comedian.deleteMany({}); // Clear db.comedians collection (temp behaviour)
})()

// Helpful events
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", mongoURI));
db.on("disconnected", () => console.log("mongo disconnected"));

// Export models
module.exports = {
    Comedian
}