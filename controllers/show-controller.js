const {Show, Comedian} = require("../models");
const httpStatus = require("http-status");

const create = async (req, res) => {
    try{
        const result = await Show.create(req.body);
        res.json(result);   
    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
};

const findAll = async (req, res) => {
    try{        
        console.log(req.query);
        const result = await Show.find(req.query).populate("performers").exec();
        res.json(result);
    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
};

const updateOne = async(req, res) => {
    try{
        const id = req.params.id;

        const updated = await Show.updateOne({_id:id}, {$set: req.body});
        res.json(updated);

    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

const deleteOne = async (req,res) => {
    try{
        const id = req.params.id;
        const deleted = await Show.deleteOne({_id:id});
        res.json(deleted);
    }catch(e){  
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

const findOne = async (req, res) => {
    try{
        const id = req.params.id;
        const fetched = await Show.findOne({_id:id});
        res.json(fetched);
    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
    }
}

const assign = async (req, res) => {

    console.log("run assign func");
    try{
        // Fetch required inputs
        const showId = req.params.showId;
        const comedianId = req.params.comedianId;
        console.log("inputs", typeof showId, showId, typeof comedianId, comedianId);

        // Check if performer already exist
        const show = await Show.findById(showId).populate("performers").exec();
        console.log("show retrieved", show);
        if(!show) return res.sendStatus(httpStatus.NOT_FOUND); // show not found
        const found = show.performers.find(performer => String(performer._id) === comedianId);
        console.log("found", found);
        if(found) return res.sendStatus(httpStatus.CONFLICT); // performer exist

        // Check if comedian exist in collection
        const comedian = await Comedian.findById(comedianId);
        if(!comedian) return res.sendStatus(httpStatus.NOT_FOUND); // comedian not found
        console.log("comedian retrieved", comedian);
        
        // Assign comedian to show
        show.performers.push(comedianId); // success flow
        show.save();

        res.sendStatus(httpStatus.OK);
    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
    
}

const unassign = async (req, res) => {
    console.log("run unassign func");
    try{
        // Get required parameters
        const showId = req.params.showId;
        const comedianId = req.params.comedianId;
        console.log(`showId:${showId}, comedianId:${comedianId}`)

        // Get show
        const show = await Show.findById(showId).populate("performers").exec();
        console.log("retrieved show", show);
        if(!show) return res.sendStatus(httpStatus.NOT_FOUND);

        // Look for performer
        console.log("show.id", show.id);
        const found = show.performers.find(performer => String(performer._id) === comedianId)
        console.log("performer found", found);

        // If not found, return bad request
        if(!found) return res.sendStatus(httpStatus.BAD_REQUEST);

        // If found, remove it and update
        show.performers = show.performers.filter(p => String(p._id) !== comedianId);
        console.log("new performers state", show.performers);
        show.save();
        res.sendStatus(httpStatus.OK);
    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
    }
}

module.exports = {
    create, findAll, updateOne, deleteOne, findOne, assign, unassign
}