const {Schema, model} = require("mongoose");

const EpisodeSchema = new Schema(
    {
        id: {type: Number},
        name: {type: String},
        air_date: {type: String},
        episode: {type: String},
        characters: {type: Array},
        url: {type: String}
    }
);

const Episode = model("Episode", EpisodeSchema);
module.exports = Episode;