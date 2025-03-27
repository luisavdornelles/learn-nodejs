const { planets } = require("../../models/planets.model");

function getAllPlanets(req, res) {
    // using return to avoid setting the status twice by mistake
    // also helps with readability
    return res.status(200).json(planets);
}

module.exports = {
    getAllPlanets,
}
