const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  // read file here
  fs.readFile("./data.txt", "utf-8", (err, data) => {
    if (err) {
      res.send("There was an error accessiing the file!");
    }
    res.send(data);
  });
});

app.get("/cars", (req, res) => {
  res.send("carss here");
});

app.listen(8000, () => {
  console.log("server started");
});
