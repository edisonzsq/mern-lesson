/*
    Routers are responsible to document APIs
*/

const express = require("express");
const app = express();
const {router: comedianRouter} = require("./comedian-router");
const {router: showRouter} = require("./show-router");
const {router: accountRouter} = require("./account-router");
const {assign, unassign} = require('../controllers/show-controller');
const {generatePayroll} = require("../services/payroll-service");
const httpStatus = require("http-status");
const {printSomethingMiddleware} = require("../middlewares/print-smt-middleware");
const {myNameMiddleware} = require("../middlewares/my-name-middleware")
const passport = require("passport"); // ADD
const session = require("express-session"); // ADD
 
require("../config/passport")(passport); // ADD

// Middleware
app.use(express.json());
app.use(session({ secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS' })); // ADD
app.use(passport.initialize()); // ADD
app.use(passport.session()); // ADD

app.use("/comedians", [printSomethingMiddleware, myNameMiddleware]);
app.use("/auth", accountRouter);

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