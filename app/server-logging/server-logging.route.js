const express = require("express");
const logging = require("./server-logging.controller");

const router = express.Router();

router.post("/api/v1/create-server-log", (_req, _res, _next) => logging.createServerLog(_req, _res));
router.get("/api/v1/get-server-log", (_req, _res, _next) => logging.getServerLogging(_req).then(_res.success).catch(_next));


module.exports = router;