const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("This is home");
});

app.get("/home", (req, res) => {
    res.render("home");
});

app.get("/events", (req, res) => {
    res.render("events");
});

app.get("/profile", (req, res) => {
    res.render("profile");
app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register", (req, res) => {

    console.log(req.body);

    if (req.body.password !== req.body.confirmPassword) {
        return res.send("Passwords do not match");
    }

    res.send("Registration Successful!");
});

app.post("/login", (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    console.log(req.body);

    if (
        email === "test@gmail.com" &&
        password === "12345"
    ) {
        res.send("Login Successful!");
    } else {
        res.send("Invalid Email or Password");
    }

});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});