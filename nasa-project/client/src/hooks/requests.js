const API_URL = "http://localhost:8000";

/**
 * Fetches the list of planets from the API.
 *
 * @async
 * @function
 * @returns {Promise<Object[]>} A promise that resolves to an array of planet objects.
 * @throws {Error} Throws an error if the fetch request fails.
 */
async function httpGetPlanets() {
    const response = await fetch(`${API_URL}/planets`);
    return await response.json();
}

/**
 * Fetches the list of launches from the server, sorts them by flight number, and returns the sorted array.
 *
 * @async
 * @function
 * @returns {Promise<Object[]>} A promise that resolves to an array of launch objects sorted by flight number.
 * @throws {Error} Throws an error if the fetch request fails or the response cannot be parsed as JSON.
 */
async function httpGetLaunches() {
    const response = await fetch(`${API_URL}/launches`);
    const unsortedLaunches = await response.json();
    return unsortedLaunches.sort((a, b) => a.flightNumber - b.flightNumber);
}

async function httpSubmitLaunch(launch) {
    // TODO: Once API is ready.
    // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
    // TODO: Once API is ready.
    // Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
