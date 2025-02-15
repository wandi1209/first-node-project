const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello from the server");
});

app.get("/cars", (req, res) => {
  res.send("carss here");
});

app.listen(8000, () => {
  console.log("server started");
});
