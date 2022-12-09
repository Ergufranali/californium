const myDate = new Date();
const date = function(){
    console.log(myDate.toLocaleDateString());
}
module.exports.myDate = date

// month
const DateObj = new Date();
const months = function () {
    console.log(DateObj.toLocaleString("default", { month: "short" }));
  };
  module.exports.month = months;

  // print batch name

const batchName = "Californium, W3D4, the topic for today is Nodejs module system"
const functionUp = function(){
    console.log(batchName)
};

module.exports.batchName = functionUp


