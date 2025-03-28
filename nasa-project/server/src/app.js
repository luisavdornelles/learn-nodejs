const path = require("path");
const express = require("express");
const cors = require("cors");
const planetsRouter = require("./routes/planets/planets.router");

const app = express();

// allow client-side server to make requests to the API
app.use(cors({
    origin: "http://localhost:3000"
}));

// middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")))

app.use(planetsRouter);

module.exports = app;
