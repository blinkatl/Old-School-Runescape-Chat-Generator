const express = require("express");
const app = express();
const path = require('path');
const chatHeadRouter = require('./routes/chatheadRouter');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/chathead', express.static(path.join(__dirname, 'chatheads')));
app.use('/chathead', chatHeadRouter);

app.get('/', (req, res) => {
    res.json('Hello from the backend!');
  });



const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));