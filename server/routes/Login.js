const express = require("express");
const rout = express.Router();

const { Logins } = require("../../nechamishoshi/server/controlers/Login");

rout.post("/", Logins);
