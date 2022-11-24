
/*
    Controllers are responsible to handle Request and Response
*/

const {Comedian} = require("../models");
const httpStatus = require("http-status");

// Implement create function
const create = async (req, res) => {
    try{
        const result = await Comedian.create(req.body);
        res.json(result);   
    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

const findAll = async (req, res) => {
    try{        
        console.log(req.query);
        const result = await Comedian.find(req.query).exec();
        res.json(result);
    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

// Export functions
module.exports = {
    create, findAll
}