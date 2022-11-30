const express = require("express");
const router = express.Router();

const {signUp} = require("../controllers/account-controller");

router.get("/success", (req, res) => {res.send("sign up success")});
router.post("/signup", signUp);
router.get("/failure", (req, res) => {res.send("sign up failure")});

module.exports = {router};