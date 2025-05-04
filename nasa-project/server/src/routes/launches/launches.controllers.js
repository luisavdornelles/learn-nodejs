const { launches } = require("../../models/launches.model");

/**
 * Retrieves all launches and sends them as a JSON response.
 *
 * @param {import('express').Request} req - The HTTP request object.
 * @param {import('express').Response} res - The HTTP response object.
 * @returns {void} Sends a JSON response containing an array of all launches.
 */
function getAllLaunches(req, res) {
    return res.status(200).json(Array.from(launches.values()));
}

module.exports = {
    getAllLaunches,
};
