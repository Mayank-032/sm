var express = require("express");
var mongoose = require("mongoose");

var app = express();
app.get("/", function(req, res) {
    res.send("hello")
})

app.listen(3000, function() {
    console.log("Working on 3000!!!")
})