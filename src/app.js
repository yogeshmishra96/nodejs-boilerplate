const express = require("express");
const bodyParser = require("body-parser");
const serverLogsRoute = require("./app/server-logging/server-logging.route");

const app = express();

// Load API Logger Middleware
app.use(require("./middlewares/api-logger.middleware"));
app.use(require("./middlewares/response-handler.middleware"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", serverLogsRoute);

app.use("/api/v1", require("./middlewares/error-response-handler.middleware"));
app.use("/api/v1", require("./middlewares/error-handler.middleware"));


app.get("/", (req, res) => {
    res.status(200).send('<h1>NodeJs PostgreSQL Boilerplate</h1>')
});

module.exports = app;