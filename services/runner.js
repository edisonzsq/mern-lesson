const {generatePayroll} = require("./payroll-service");

(async()=>{
    await generatePayroll(11,2022);
})()