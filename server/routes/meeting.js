const express = require("express");
const rout = express.Router();

const {
  deleteMeetingById,
  updateMeetingById,
  createMeeting,
  getallMeetingById,
  getallMeeting,
} = require("../../nechamishoshi/server/controlers/meeting");

rout.get("/", getallMeeting);

rout.get("/:UserId", getallMeetingById);

rout.post("/", createMeeting);

rout.put("/:UserId", updateMeetingById);

rout.delete("/UserId", deleteMeetingById);

module.exports = rout;
