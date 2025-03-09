// File named "server.js" allows command "npm start" to be used
// without needing to declare it on package.json

const express = require("express");
const path = require("path");

const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");

const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

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

app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.render("index", { 
        title: "Express Project",
        caption: "Welcome to Express Project"
    });
});
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
