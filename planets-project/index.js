const { parse } = require("csv-parse");
const fs = require("fs");

const results = [];

fs.createReadStream("kepler_data.csv")
    .pipe(parse({ // parse function will run with the chunk ready from the createReadStream
        comment: "#", // consider # as comments
        columns: true, // each line will be an object, not an array
    }))
    .on("data", (data) => {
        results.push(data);
    })
    .on("end", () => {
        console.log(results);
        console.log("done");
    })
    .on("error", (err) => {
        console.log(err);
    });

// parse();
