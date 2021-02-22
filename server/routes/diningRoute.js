const router = require("express").Router();
let diningApi = require("./models/dining");

router.route("/").get((req, res) => { 
  const dining = diningApi.getDiningCourts();
  res.json(dining);
});

module.exports = router;