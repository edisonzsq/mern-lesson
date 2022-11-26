const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const payrollSchema = new Schema(
    {
        payee:{type:Schema.Types.ObjectId, ref:"Comedian", required:true},
        salary:{type:Schema.Types.Decimal128, required:true},
        month:{type:Number, required:true},
        year:{type:Number, required:true},
        paid:{type:Boolean, required:true}
    }
)

module.exports = mongoose.model("PayRoll", payrollSchema);