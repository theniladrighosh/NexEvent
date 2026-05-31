const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("NexEvent is Live 🚀");
});

app.get("/events", (req, res) => {
    res.send("All Events Page");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});