const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(express.json());
app.use(cors());
const db = require("./models");

//Routers
const operatorRouter = require("./routes/Operators");
app.use("/operators", operatorRouter);

const residentRouter = require("./routes/Residents");
app.use("/residents", residentRouter);

db.sequelize.sync().then(() => {
  app.listen(8081, function () {
    console.log("Servidor rodando na url http://localhost:8081");
  });
});
