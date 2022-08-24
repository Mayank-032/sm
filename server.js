var express = require("express");
var mongoose = require("mongoose");
var signinRoute = require("./controllers/signin.js");
var signupRoute = require("./controllers/signup.js");

var app = express();
// app.use("/signin", signinRoute);
app.use("/signup", signupRoute);

app.listen(3000, function () {
  console.log("Working on 3000!!!");
});
