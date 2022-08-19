const express = require("express");
const router = express.Router();
const multer = require("multer");
const {postOneImage}= require("../controllers/Controllers")


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./images/")
    },

    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

const upload = multer({storage: storage})

router.post("/image", upload.single("url"), postOneImage)

module.exports = router;