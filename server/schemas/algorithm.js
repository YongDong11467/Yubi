const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const algorithm = new Schema({
    name: { type: String, default: null },
    description: { type: String, default: null },
    sourceCode: { type: String, default: null }
});

const Algorithm = mongoose.model("Algorithm", algorithm);
module.exports = Algorithm;