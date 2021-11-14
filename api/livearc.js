const settings = require("../settings.json");
const indexjs = require("../index.js");
const ejs = require("ejs");
const chalk = require("chalk");
const axios = require('axios')

module.exports.load = async function(app, db) {
  app.get("/getlivearc", async (req, res) => {
    axios.get("http://51.38.117.198:6543/api/allstats").then(rsp => {
      res.send(rsp.data)
    })
  });
};