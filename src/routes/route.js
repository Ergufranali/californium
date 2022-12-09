const express = require("express");
const lodash = require("lodash");
const router = express.Router();
const intro = require("./introduction");
const employee = require("./employee");
const underscore = require("underscore");
const abcd = require("../logger/logger");
const currentDate = require("../util/helper");
const getsMonth = require("../util/helper");
const printBatchData = require("../util/helper");
const trimFUnction = require("../validator/formatter");
const convertToLower = require("../validator/formatter");
const convertToUpper = require("../validator/formatter");
const load = require("../validator/formatter");
const oddNumbers = require("../validator/formatter");
const unionResult = require("../validator/formatter");
// const pairFunc = require('../validator/formatter')

//-------------------------------------------------------//
router.get("/test-me", function (req, res) {
  abcd.californium();
  currentDate.myDate();
  getsMonth.month();
  printBatchData.batchName();
  trimFUnction.formatter();
  convertToLower.text();
  convertToUpper.getUpper();
  load.split();
  oddNumbers.oddNum();
  unionResult.arrResult();
  // pairFunc.objResult();
  const obj = [
    ["horror", "the shining"],
    ["drama", "titanic"],
    ["thriller", "Shutter Island"],
    ["fantasy", "Pans Labyrinth"],
  ];
  console.log(lodash.fromPairs(obj));

  res.send("any dummy text");
});

router.get("/test-you", function (req, res) {
  console.log("I am here");
  res.send("very important text");
});

module.exports = router;

// console.log("email from introduction module", intro.myEmail)
// intro.myFunction('Sabiha')
// console.log("email from employee module", employee.myEmail)

// const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
// let result = _.first(days, 4)
// console.log(`Result from underscore function is ${result}`)
