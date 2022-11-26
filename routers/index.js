/*
    Routers are responsible to document APIs
*/

const express = require("express");
const app = express();
const {router: comedianRouter} = require("./comedian-router");
const {router: showRouter} = require("./show-router");
const {assign, unassign} = require('../controllers/show-controller');

// Middleware
app.use(express.json());

// Endpoints
app.use("/comedians", comedianRouter);
app.use("/shows", showRouter);

app.post("/assign/:showId/:comedianId", assign);
app.delete("/assign/:showId/:comedianId", unassign);

// Start server
app.listen(3000, ()=>{
    console.log("Listening to port 3000...");
})