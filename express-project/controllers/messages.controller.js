function getMessages(req, res) {
    res.send("<ul><li>helloooo</li></ul>");
};

function postMessages(req, res) {
    res.send("Updating messages...");
};

module.exports = {
    getMessages,
    postMessages
};
