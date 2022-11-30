const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const accountSchema = new Schema(
    {
        email:{
            type:String, required:true, unique:true
        },
        password:{
            type:String
        },
        lastLogin:{
            type:Date
        }
    }
)

module.exports = mongoose.model("Account", accountSchema);

