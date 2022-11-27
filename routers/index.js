/*
    Routers are responsible to document APIs
*/

const express = require("express");
const app = express();
const {router: comedianRouter} = require("./comedian-router");
const {router: showRouter} = require("./show-router");
const {assign, unassign} = require('../controllers/show-controller');
const {generatePayroll} = require("../services/payroll-service");
const httpStatus = require("http-status");

// Middleware
app.use(express.json());

// Endpoints
app.use("/comedians", comedianRouter);
app.use("/shows", showRouter);

app.post("/assign/:showId/:comedianId", assign);
app.delete("/assign/:showId/:comedianId", unassign);
app.post("/generatepayroll/:month/:year", async (req, res) => {

    const month = parseInt(req.params.month);
    const year = parseInt(req.params.year);
    await generatePayroll(month, year);
    res.sendStatus(httpStatus.OK);
})

// Start server
app.listen(3000, ()=>{
    console.log("Listening to port 3000...");
})