require('dotenv').config();
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var signinRoute = require("./controllers/signin.js");
var signupRoute = require("./controllers/signup.js");
var logoutRoute = require("./controllers/logout")
var auth = require("./middleware/auth")

var app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cookieParser());

// Database connection
mongoose.connect(process.env.DB_CONNECTION_STRING);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.use("/auth", auth);
app.use("/signin", signinRoute);
app.use("/signup", signupRoute);
app.use("/logout", logoutRoute);

app.listen(3000, function () {
  console.log("Working on 3000!!!");
});
