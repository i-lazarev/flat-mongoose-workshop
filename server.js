const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./Routes/flat-routes");
app.use(express.json()); // -> for parsing incoming data

mongoose.connect("mongodb://localhost/flats", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

mongoose.connection.on("open", () => {
  console.log("Mongodb Connection established");
});

app.use((req, res, next) => {
  res.set("ACCESS-CONTROL-ALLOW-ORIGIN", "*");
  res.set("ACCESS-CONTROL-ALLOW-METHODS", "*");
  res.set("ACCESS-CONTROL-ALLOW-HEADERS", "*");
  next();
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

app.use("/", router);
