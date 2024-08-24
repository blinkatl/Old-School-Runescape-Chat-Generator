const express = require("express");
const cors = require('cors');
const app = express();
const path = require('path');
const chatHeadRouter = require('./routes/chatheadRouter');
const generateRouter = require("./routes/generateRouter");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/chathead', express.static(path.join(__dirname, 'chatheads')));
app.use('/chathead', chatHeadRouter);
app.use('/generate', generateRouter);

app.get('/', (req, res) => {
    res.json('Hello from the backend!');
  });

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));