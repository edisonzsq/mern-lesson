const {calculateSalary} = require("./payroll-service");

describe("test calculateSalary func", ()=>{
    test("with 180 minutes and 1000 per hour returns 3000", ()=>{
        const minutesPerformed = 180;
        const ratesPerHour = 1000;

        const salary = calculateSalary(minutesPerformed, ratesPerHour);
        expect(salary).toBe(3000);
    })

    test("with 90 minutes and 1000 per hour returns 1500", ()=>{
        const minutesPerformed = 90;
        const ratesPerHour = 1000;

        const salary = calculateSalary(minutesPerformed, ratesPerHour);
        expect(salary).toBe(1500);
    })

    test("with 100 minutes and 1000 per hour returns 1666 which is a round down from decimal point", ()=>{
        const minutesPerformed = 100;
        const ratesPerHour = 1000;

        const salary = calculateSalary(minutesPerformed, ratesPerHour);
        expect(salary).toBe(1666);
    })
})