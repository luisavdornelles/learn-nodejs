// File named "server.js" allows command "npm start" to be used
// without needing to declare it on package.json

const express = require("express");

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
