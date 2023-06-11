const mongoose = require('mongoose');

const Schema = mongoose.Schema

const songSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    lyrics: String,
    chords: [{name: String}]

}, {timestamps: true})

module.exports = mongoose.model('Song', songSchema)