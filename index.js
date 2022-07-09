const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
  });
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "/about.html"));
  });
app.get("/contact-me", (req, res) => {
    res.sendFile(path.join(__dirname, "/contact-me.html"));
});
app.get("/:id", (req, res) => {
    res.sendFile(path.join(__dirname, "/404.html"));
});
// id slash route should be last because express runs all code in order
app.listen(port, () => {
});
