require("dotenv").config("./.env.");
const PORT = process.env.PORT;
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());

//API ROUTES
//Projects

const Routes = require("../src/routes/router");
app.use("/api", Routes);





//DB CONNECTION
const conn = require("./conn")
conn()



app.listen(process.env.PORT, () => {
  console.log(`Servidor online na porta: ${PORT}!`);
});
