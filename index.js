const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
require("dotenv").config();
app.get("/twitter", (req, res) => {
  res.send("anujpradhan235");
});
app.get("/login", (req, res) => {
  res.send("<h1>Please login on the backendDepoly</h1>");
});
app.get("/youtube", (req, res) => {
  res.send("<h1>Anuj Subhash Pradhan</h1>");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
