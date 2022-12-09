const lodash = require("lodash");

const formatter = "functionUp";
const formatter1 = function () {
  console.log(formatter.trim());
};
module.exports.formatter = formatter1;

// to lowerCase
const text1 = "GHUFRAN UMAR ANSARI";
const text = function () {
  console.log(text1.toLowerCase());
};
module.exports.text = text;

// toUpperCase

const toUpper = "hello functionup";
const getUpper = function () {
  console.log(toUpper.toUpperCase());
};
module.exports.getUpper = getUpper;

// split the array
const Splitarr = lodash.chunk(
  [
    "jan",
    "feb",
    "march",
    "april",
    "may",
    "june",
    "july",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ],
  4
);
const split = function () {
  console.log(Splitarr);
};
module.exports.split = split;

//tail function
const tailFunc = lodash.tail([3, 5, 7, 9, 11, 13, 15, 17, 19, 21]);
const oddNum = function () {
  console.log(tailFunc);
};
module.exports.oddNum = oddNum;

// chunk function
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 4, 6, 1, 8];
const arr3 = [7, 6, 11, 6, 8];
const arr4 = [9, 14, 3, 7, 6];
const arr5 = [56, 2, 4, 5, 6];
const arrResult = function () {
  console.log(lodash.union(arr1, arr2, arr3, arr4, arr5));
};
module.exports.arrResult = arrResult;

// from pairs
// const obj = [["horrr","the shining"],["drama","titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
// const objResult = function(){
//     console.log(lodash.fromPairs(obj))
// }
// modules.exports.objResult =objResult
