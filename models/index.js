// Import dependencies
const mongoose = require("mongoose");
const Comedian = require("./comedian.js");
const Show = require("./show.js");
const PayRoll = require("./payroll");
const Rates = require("./rates");

// Config
const mongoURI = "mongodb://localhost:27017/learn";
const db = mongoose.connection;

// Connect
mongoose.connect(mongoURI, ()=>{
    console.log("Connection to Mongo DB established.");
    
});

// Helpful events
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", mongoURI));
db.on("disconnected", () => console.log("mongo disconnected"));

// Export models
module.exports = {
    Comedian, Show, PayRoll, Rates
}