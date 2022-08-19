const express = require("express");
const router = express.Router();
const {getAll, getById}= require("../controllers/Controllers")



//      GET /api/episods
//      get all episods

router.get("/episode", getAll)


//      GET /api/episods/id
//      get one episod by id

router.get("/episode/:id", getById)



module.exports = router;