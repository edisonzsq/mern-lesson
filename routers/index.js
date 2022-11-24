/*
    Routers are responsible to document APIs
*/

const express = require("express");
const app = express();
const {create, findAll} = require("../controllers/comedian-controller");

// Middleware
app.use(express.json());

// Endpoints
app.post("/comedians", create);
app.get("/comedians", findAll);

// Start server
app.listen(3000, ()=>{
    console.log("Listening to port 3000...");
})