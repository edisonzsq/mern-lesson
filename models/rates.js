const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ratesSchema = new Schema(
    {
        show:{type:Schema.Types.ObjectId, ref:"Show", required:true, unique:true},
        perHourRates:{type:Schema.Types.Decimal128, required:true}
    }
)

module.exports = mongoose.model("Rates", ratesSchema);