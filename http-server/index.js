const http = require("http");

const PORT = 3000;

// req is a readable stream
// res is a writable stream
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "application/json",
    });
    res.end(JSON.stringify({
        id: 1,
        name: "luisa",
    }));
});

// pass in the port for localhost
server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
