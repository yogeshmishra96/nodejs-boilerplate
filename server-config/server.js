"use strict";

const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require('path');
const { createDatabaseConnection } = require("../DB/database.service");
const { generateSelfSignedSSL, getSSLConfig } = require("./ssl-service");
const { runMigrationsAndSeeders } = require("../DB/services/run-migration-seeders");
const { HTTP_PORT, HTTPS_PORT } = process.env;


const runServer = async (app) => {
    await runMigrationsAndSeeders();
    await createDatabaseConnection();
    if (!fs.existsSync(path.join(__dirname, "ssl/localhost.key"))) {
        await generateSelfSignedSSL();
    }

    // Start the Server 
    const sslConfig = getSSLConfig();
    const secureServer = createHttpsServer(app, sslConfig);
    secureServer.listen(HTTPS_PORT, function () {
        console.log(`Server is listening on https://localhost`);
    });

    // Redirect from http port 80 to https
    createHttpServer();
};

const createHttpServer = () => {
    return http.createServer(function (req, res) {
        const redirectURL = `https://${req.headers.host}${req.url}`.replace(HTTP_PORT, HTTPS_PORT);
        res.writeHead(301, { Location: redirectURL });
        res.end();
    }
    ).listen(HTTP_PORT);
}


const createHttpsServer = (_app, sslConfig) => {
    const options = {
        key: fs.readFileSync(path.join(sslConfig.keyPath)),
        cert: fs.readFileSync(path.join(sslConfig.certPath))
    };
    return https.createServer(options, _app);
}


module.exports = {
    runServer
};
