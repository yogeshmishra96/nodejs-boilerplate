require('dotenv').config();
const { runServer } = require("./server-config/server");

const mainApp = require("./server-config/main-app");

runServer(mainApp);