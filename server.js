var express = require("express");
var bodyParser = require("body-parser");
var config = require("./config");
var profileCtrl = require("./controllers/profileCtrl");
var userCtrl = require("./controllers/userCtrl");
var cors = require("cors");
var session = require("express-session");
var mongojs = require("mongojs");

var app = express();

app.use(bodyParser.json());

var corsOptions = {
	origin: "http://localhost:8500"
};

app.use(cors(corsOptions));

app.use(session({
	secret: config.sessionSecret,
	saveUninitialized: true,
    resave: true
}));

app.use(express.static(__dirname + "/public"));

app.post("/api/login", userCtrl.login);
app.get("/api/profiles", profileCtrl.friendsArr);


var port = 8500;
app.listen(port, function() {
	console.log("listening on port:", port);
});