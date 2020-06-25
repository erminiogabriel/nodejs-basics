const express = require("express");
const cors = require("cors");
//ORM Mapeamento objeto-relacional
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://192.168.25.5:27017/nodeapi", {useNewUrlParser: true, useUnifiedTopology: true});
requireDir("./src/models");

app.use('/api', require("./src/routes"));

app.listen(3001);