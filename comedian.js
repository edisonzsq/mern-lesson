const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const comedianSchema = new Schema(
    {
        name:{
            type:String, required:true, unique:true
        },
        location:{
            type:String, required:true
        }
    }
)

const Comedian = mongoose.model("Comedian", comedianSchema);

module.exports = Comedian;