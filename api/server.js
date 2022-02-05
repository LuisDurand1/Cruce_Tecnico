const express = require("express");
const db = require("./db");
const app = express();
const router=require("./routes")
const bodyParser=require("body-parser")
const Product=require("./models/Product")
const client=require("./db/index")
const cors = require("cors")
const mongooseLoader=require("./db/index")

require("dotenv").config();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use("/api",router);


mongooseLoader()
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(3001, () => {
      console.log(`server listening on port 3001`);
    });
  })
  .catch((err) => console.log(err));