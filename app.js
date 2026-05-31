const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("This is home");
});

app.get("/home", (req, res) => {
    res.render("home");
});

app.get("/events", (req, res) => {
    res.render("events");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});