const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

const diningRouter = require("./routes/diningRoute");
const quoteRouter = require("./routes/quoteRoute");

app.use("/routes/dining", diningRouter);
app.use("/routes/quote", quoteRouter);

app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('Default route');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});