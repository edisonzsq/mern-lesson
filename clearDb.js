const {PayRoll, Rates, Comedian, Show} = require("./models");

const clearAllData = async () => {
    await PayRoll.deleteMany({});
    await Rates.deleteMany({});
    await Comedian.deleteMany({});
    await Show.deleteMany({});
}

clearAllData();

setInterval(()=>{
    console.log("Countdown 2s and exit...");
    process.exit(0);
}, 2000)