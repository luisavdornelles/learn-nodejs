// File named "server.js" allows command "npm start" to be used
// without needing to declare it on package.json

const express = require("express");

const friendsController = require("./controllers/friends.controller");
const messagesController = require("./controllers/messages.controller");

const app = express();
const PORT = 3000;

// Middleware

// This will run before any route is called
// Logs request and response time
app.use((req, res, next) => {
    const start = Date.now();
    next();
    // after route is done, this will run
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} took ${delta} ms`);
});

app.use(express.json());

app.post("/friends", friendsController.postFriends);
app.get("/friends", friendsController.getFriends);
app.get("/friends/:friendId", friendsController.getFriend);

app.get("/messages", messagesController.getMessages);
app.post("/messages", messagesController.postMessages);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
