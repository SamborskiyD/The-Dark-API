const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema(
    {
        id: Number,
        url: String
    }
);

const Image = mongoose.model("Image", ImageSchema);

module.exports = Image;