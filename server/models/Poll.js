const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PollSchema = new Schema({
    state: {
        type: String,
        required: true
    },
    lean: {
        type: String,
        required: true
    },
    strength: {
        type: Number,
        required: true
    },
    org: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

module.exports = Poll = mongoose.model('poll', PollSchema);