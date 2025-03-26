const http = require("http");
const app = require("./app");

// client-side runs by default on port 3000
const PORT = process.env.PORT || 8000;

// express can be used with the built in listener function
const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
