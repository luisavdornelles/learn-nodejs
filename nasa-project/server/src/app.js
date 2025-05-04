const path = require("path");
const express = require("express");
const cors = require("cors");
const planetsRouter = require("./routes/planets/planets.router");
const launchesRouter = require("./routes/launches/launches.router");
const morgan = require("morgan");

const app = express();

// allow client-side server to make requests to the API
app.use(
    cors({
        origin: "http://localhost:3000",
    })
);

// loggin middleware should go as high up as possible
app.use(morgan("combined"));

// middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use(planetsRouter);
app.use(launchesRouter);

app.get("/*", (req, res) => {
    res.send(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
