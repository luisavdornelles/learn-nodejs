// File named "server.js" allows command "npm start" to be used
// without needing to declare it on package.json

const express = require("express");

const app = express();
const PORT = 3000;

const friends = [
    {
        id: 0,
        name: "Albert Einstein"
    },
    {
        id: 1,
        name: "Sir Isaac Newton"
    }
];

app.get("/friends", (req, res) => {
    res.json(friends);
});

// GET /friends/22
app.get("/friends/:friendId", (req, res) => {
    const friendId = req.params.friendId;
    const friend = friends[friendId];

    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({error: "Friend does not exist"});
    }
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
