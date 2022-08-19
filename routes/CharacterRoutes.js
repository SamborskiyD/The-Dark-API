const express = require("express");
const router = express.Router();

const {getAll, getById}= require("../controllers/Controllers")




//      GET /api/characters
//      get all characters

router.get("/character", getAll);


//      GET /api/characters/id
//      get one character by id

router.get("/character/:id", getById);



module.exports = router;