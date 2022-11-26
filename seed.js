const {Rates, Show, Comedian} = require("./models");

const shows = [
    {
        title:"Weekday Smile",
        venue:"Esplanade Theatre 1",
        start:"2022-12-15T12:00:00Z", // Thu, 8pm
        duration:60
    },
    {
        title:"Friday Craze",
        venue:"Esplanade Theatre 1",
        start:"2022-12-16T12:00:00Z", // Thu, 8pm
        duration:90
    },
    {
        title:"Saturday Hype",
        venue:"Esplanade Theatre 1",
        start:"2022-12-17T12:00:00Z", // Thu, 8pm
        duration:90
    },
]

const comedians = [
    {
        name:"Uncle Roger",
        location:"London"
    },
    {
        name:"Ra Ra Kumar",
        location:"Singapore"
    }
]

const performSeed = async () => {
    const createdShows = await Show.insertMany(shows);
    console.log(`Created ${createdShows.length} shows`);

    createdShows.forEach(show => {
        const rate = new Rates();
        const dayOfWeek = new Date(show.start).getDay();

        // $1000 for weekend. $500 for weekday.
        rate.perHourRates = (dayOfWeek === 6 || dayOfWeek === 0) ? 1000 : 500;
    
        rate.show = show._id;
        rate.save();
        console.log("Created rates: ", JSON.stringify(rate));
    });

    const createdComedians = await Comedian.insertMany(comedians);
    console.log(`Created ${createdComedians.length} comedians`);
}

performSeed();

setInterval(()=>{
    console.log("Countdown 2s and exit...");
    process.exit(0);
}, 2000)