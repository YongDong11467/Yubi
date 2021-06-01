let Algorithm = require("../../schemas/algorithm");

function fetchAlgorithm() {
    Algorithm.find().then((algorithms) => console.log(algorithms))
    .catch((err) => res.status(400).json("Error: " + err));
}

function addAlgorithm(name, description, sourceCode) {
    const algorithm = new Algorithm({
        name,
        description,
        sourceCode
    });
    return new Promise((resolve, reject) => {
        algorithm
        .save()
        .then(() => resolve({ success: `Successfully added new algorithm` }))
        .catch((err) => reject(err));
    });
}

module.exports = {
    addAlgorithm
};