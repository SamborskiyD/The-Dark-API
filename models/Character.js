const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema(
    {
        id: Number,
        name: String,
        born: String,
        occupation: Array,
        img: String,
        status: String,
        aliases: Array,
        appearance: Array,
        portarayed: Object,
        first_appearance: Object,
        residence: String,
        url: String
    }
);

const Character = mongoose.model("Character", CharacterSchema);

module.exports = Character;