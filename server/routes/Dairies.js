const express = require("express");
const rout = express.Router();

const {
  getalldays,
  deleteById,
  createdairies1,
  createdairies,
} = require("../../nechamishoshi/server/controlers/Dairies");

rout.get("/:UserId/diary", getalldays);

rout.post("/:UserId/diary", createdairies1);

rout.post("/:UserId/diary/:id", createdairies);

rout.delete("/UserId/diary/:id", deleteById);

module.exports = rout;
