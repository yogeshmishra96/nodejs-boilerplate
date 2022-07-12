const express = require("express");
const users = require("./users.controller");

const router = express.Router();


router.post("/api/v1/create-users", (_req, _res, _next) => users.createUser(_req).then(_res.success).catch(_next));

module.exports = router;