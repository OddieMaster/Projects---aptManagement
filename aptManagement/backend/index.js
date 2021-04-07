const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const db = require("./models");






app.listen(8081, function(){
  console.log("Servidor rodando na url http://localhost:8081")
});
