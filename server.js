const express = require("express");
const app = express();

app.use("/public", express.static("public"));

app.get("/", (req, res) => {

    res.redirect("/home");

})

app.get("/home", (req, res) => {

    res.sendFile(__dirname + "/index.html");

});

app.listen(5000);