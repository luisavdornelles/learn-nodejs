const path = require("path");

function getMessages(req, res) {
    res.render("messages", {
        title: "Messages to friends",
        name: "John Doe",
    });
};

function postMessages(req, res) {
    res.send("Updating messages...");
};

module.exports = {
    getMessages,
    postMessages
};
