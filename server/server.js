const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/gamifiedDB");

app.use('/', routes);

app.listen(3000, () => console.log("Server running on port 3000"));