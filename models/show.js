const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const showSchema = new Schema(
    {
        title:{
            type:String, required:true
        },
        venue:{
            type:String, required:true
        },
        start:{
            type:Date, required:true
        },
        duration:{
            type:Number, required:true
        },
        performers:[{ type: Schema.Types.ObjectId, ref: 'Comedian' }]
    }
)

module.exports = mongoose.model("Show", showSchema);