const http = require("http");
const app = require("./app");

const { loadPlanetsData } = require("./models/planets.model")

// client-side runs by default on port 3000
const PORT = process.env.PORT || 8000;

// express can be used with the built in listener function
const server = http.createServer(app);

async function startServer() {
    // loading data before starting listening
    await loadPlanetsData();
    
    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
}

startServer();
