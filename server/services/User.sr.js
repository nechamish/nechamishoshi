const { Router, json } = require("express");
const fs = require("fs");
const dataFromFile = fs.readFileSync("./api/User.json");
let data = JSON.parse(dataFromFile);

module.exports = {
  getallusers: async () => {
    return await data.users;
  },
};
