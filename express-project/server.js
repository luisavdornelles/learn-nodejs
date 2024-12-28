// File named "server.js" allows command "npm start" to be used
// without needing to declare it on package.json

const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("helloooo");
});

app.get("/messages", (req, res) => {
    res.send("<ul><li>helloooo</li></ul>");
});

app.post("/messages", (req, res) => {
    res.send("Updating messages...");
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
