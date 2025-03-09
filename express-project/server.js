// File named "server.js" allows command "npm start" to be used
// without needing to declare it on package.json

const express = require("express");

const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");

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
    console.log(`${req.method} ${req.baseUrl}${req.url} took ${delta} ms`);
});

app.use(express.json());

// Routes
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
