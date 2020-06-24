const express = require("express");
//ORM Mapeamento objeto-relacional
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();

mongoose.connect("mongodb://192.168.25.5:27017/nodeapi", {useNewUrlParser: true, useUnifiedTopology: true});
requireDir("./src/models");

app.use('/api', require("./src/routes"));

app.listen(3001);