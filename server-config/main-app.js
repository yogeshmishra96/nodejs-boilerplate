const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const { loadRoutesAndMiddleware } = require("./server-utills");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(cors());
// app.options("*", cors());

/** Load All Routes and Middlewares */
loadRoutesAndMiddleware(app);

app.use("/", express.static(path.join(__dirname, "../public")));
app.use("/", express.static(path.join(process.cwd(), "../public")));


// Code to configure html5 mode in server side starts here
app.get("/", function (req, res) {
    return res.send("<h1>NodeJs BoilerPlate Sample</h1>");
});

module.exports = app;
