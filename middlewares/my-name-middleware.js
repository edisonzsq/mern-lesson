const httpStatus = require("http-status")

const myNameMiddleware = (req, res, next) => {
    console.log("my name")
    next();
  }
  
  module.exports = {
    myNameMiddleware
  }