const moment = require("moment");
const { PayRoll, Rates, Show, Comedian } = require("../models");
const show = require("../models/show");

const generatePayroll = async (month, year) => {

    month = parseInt(month);
    year = parseInt(year);

    // Retrieve all the shows in the target month and year
    startDate = moment().year(year).month(month).date(1);
    endDate = moment().year(year).month(month).date(1);
    endDate.add(1, 'month');

    console.log("dates", startDate, endDate);

    const showsForTheMonth = await Show.find({
        start: {
            $gte: startDate.format(),
            $lt: endDate.format()
        }
    }).populate("performers").exec();

    console.log(`Retrieved ${showsForTheMonth.length} shows for the month of ${month} / ${year}`);

    // Calculate the salary of each unique performer
    let performerSalaryData = {};

    for(const show of showsForTheMonth){
        for(const performer of show.performers){
            const rates = await Rates.findOne({ show: show._id });
            performerSalaryData[performer._id] = 
                performerSalaryData[performer._id] ? 
                performerSalaryData[performer._id] += calculateSalary(show.duration, rates.perHourRates) : 
                calculateSalary(show.duration, rates.perHourRates);
        }
    }

    console.log("salary data", performerSalaryData);


    // Upsert the Payroll
    for(const comedianId in performerSalaryData){

        const payroll = await PayRoll.findOne({
            payee:comedianId,
            month, 
            year,
            paid:false
        })

        if(payroll){
            payroll.salary = performerSalaryData[comedianId];
            payroll.save();
        }else{
            await PayRoll.create({
                payee:comedianId,
                month, 
                year, 
                paid: false,
                salary:performerSalaryData[comedianId]
            });
        }
    }
}

function calculateSalary(minutesPerformed, ratesPerHour) {

    return Math.floor((ratesPerHour / 60) * minutesPerformed);
}

module.exports = {
    generatePayroll, calculateSalary
}