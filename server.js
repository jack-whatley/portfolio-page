const express = require("express");
const app = express();

app.use("/public", express.static("public"));

app.get("/", (req, res) => {

    res.redirect("/home");

})

app.get("/home", (req, res) => {

    res.sendFile(__dirname + "/index.html");

});

app.get("/projects/epq", (req, res) => {

    res.sendFile(__dirname + "/src/epq/epq.html");

});

app.get("/projects/epq/model", (req, res) => {

    res.sendFile(__dirname + "/src/epq/model.html")

});

app.listen(5000);