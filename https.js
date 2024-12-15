const { send } = require("./request.js");
const { read } = require("./response.js");

function request(url, data) {
    send(url, data);
    return read();
}

const responseData = request("https://www.google.com", "hello");
console.log(responseData);