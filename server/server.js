const express = require('express');
const cors = require('cors');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

const diningRouter = require("./routes/diningRoute");
const quoteRouter = require("./routes/quoteRoute");

app.use(cors());
app.use('/login', (req, res) => {
    res.send({
        token: 'test123'
    });
});

app.use("/routes/dining", diningRouter);
app.use("/routes/quote", quoteRouter);

app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('Default route');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});