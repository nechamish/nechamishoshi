const express = require("express");
const rout = express.Router();

const {
  getallUsers,
  getallUsersId,
  createUser,
  updateUser,
  updateUserId,
  deleteById,
} = require("../../nechamishoshi/server/controlers/User");

rout.get("/", getallUsers);

rout.get("/:UserId", getallUsersId);

rout.post("/", createUser);

rout.put("/", updateUser);

rout.put("/:UserId", updateUserId);

rout.delete("/UserId", deleteById);

module.exports = rout;
