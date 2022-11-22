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

// Helpful events
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", mongoURI));
db.on("disconnected", () => console.log("mongo disconnected"));


async function create(toCreate){
    console.log("Calling create() function with", toCreate);
    try{
        const result = await Comedian.create(toCreate);
        console.log("created", result);
    }catch(err){
        console.error("create err", err);        
    }
}

async function createMany(toCreate){
    console.log("Calling createMany() function with", toCreate);
    try{
        const result = await Comedian.insertMany(toCreate);
        console.log("created", result);
    }catch(err){
        console.error("create err", err);        
    }
}

async function find(params){
    console.log("Calling find() function with", params);
    try{    
        const result = await Comedian.find(params).exec();
        return result;
    }catch(err){
        console.error("find err", err);
    }
}

// IIFE to execute async code in root js file
(async ()=>{

    // Create One
    const singleDoc = {
        name:"Ronny Chieng",
        location:"Malaysia"
    };

    await create(singleDoc);


    // Create Many
    const multiDoc = [
        {
            name:"Uncle Roger",
            location:"London"
        },
        {
            name:"Ra Ra Kumar",
            location:"Singapore"
        }
    ]

    await createMany(multiDoc);


    // Check result
    const results = await find()
    console.log("retrieved results", results);
    process.exit(0);
})()