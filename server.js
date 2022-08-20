require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const cors = require("cors");

const app = express();

const CharacterRoute = require("./routes/CharacterRoutes");
const EpisodRoute = require("./routes/EpisodRoutes");
const ImageRoute = require("./routes/ImageRoutes")

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());


app.use("/", express.static(path.join(__dirname, "client", "build")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});


app.get("/api", (req, res) => {
    res.json({
        character: process.env.BASE_URL + "/api/character",
        episode: process.env.BASE_URL + "/api/episode"
    })
})


app.use("/api", CharacterRoute);
app.use("/api", EpisodRoute);
app.use("/api", ImageRoute);
app.use("/api/character/avatar/image", express.static("images"))


const PORT = process.env.PORT || 5000
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});})
.catch((err) => console.log(err.message));

