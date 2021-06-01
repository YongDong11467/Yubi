const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

require("dotenv").config();

app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Mongo connection established!!!")
});

const diningRouter = require("./routes/diningRoute");
const quoteRouter = require("./routes/quoteRoute");
const algorithmRouter = require("./routes/algorithmRoute");

// app.use('/login', (req, res) => {
//     res.send({
//         token: 'test123'
//     });
// });

app.use(bodyParser.json());

app.use("/routes/dining", diningRouter);
app.use("/routes/quote", quoteRouter);
app.use("/routes/algorithm", algorithmRouter);

app.get('/', (req,res) => {
    res.send('Default route');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});