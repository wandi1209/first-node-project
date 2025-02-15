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

app.get("/write", (req, res) => {
  fs.appendFile("./data.txt", "\nCherry", (err) => {
    if (err) {
      res.send("There was an error writen the file!");
    }
    res.send("Data writen successfully");
  });
});

app.listen(8000, () => {
  console.log("server started");
});
