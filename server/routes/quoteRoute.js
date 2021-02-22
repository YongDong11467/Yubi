const router = require("express").Router();
let quoteApi = require("./models/quote");

router.route("/").get((req, res) => { 
  quoteApi.getRandomQuote().then(quote => res.status(200).json(quote))
  .catch(err => res.status(400).json(err));
});

module.exports = router;