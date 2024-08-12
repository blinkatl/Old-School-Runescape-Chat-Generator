const express = require("express");
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.json('Hello from the backend!');
  });

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));