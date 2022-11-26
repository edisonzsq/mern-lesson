const express = require("express");
const router = express.Router();

const {create, findAll, findOne, updateOne, deleteOne} = require("../controllers/comedian-controller");

router.post("/", create);
router.get("/", findAll);
router.get("/:id", findOne);
router.put("/:id", updateOne);
router.delete("/:id", deleteOne);

module.exports = {router};