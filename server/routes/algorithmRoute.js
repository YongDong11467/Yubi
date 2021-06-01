const router = require("express").Router();
let algApi = require("./models/algorithm");

router.route("/add").post((req, res) => { 
//   const { name, description, sourceCode} = req.body;
    console.log(req.body)

  const name = req.body.name ? req.body.name : "name";
  const description = req.body.description ? req.body.description : "Empty description";
  const sourceCode = req.body.sourceCode ? req.body.sourceCode : "Source code coming soon!";

  return algApi.addAlgorithm(name, description, sourceCode)
  .then((success) => res.status(200).json(success))
  .catch((err) => res.status(400).json(err));
});

module.exports = router;