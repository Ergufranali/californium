const express = require('express');
const router = express.Router();
const _ = require('underscore')


//  write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
// router.get("/sol1",function(req,res){
// let arr = [1,2,3,5,6,7] //4 is missing
// let total = ((arr.length+1)*(arr.length+2))/2;
// // console.log(total);
// for(let i = 0;i<arr.length; i++){
//     total = total - arr[i];
// }
// console.log("this is a missing number"+  total)
// let missingNum = total
// res.send("this is a missing number"+ missingNum)
// })


// -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing

// router.get("/sol1",function(req,res){
// let arr = [1,2,3,5,6,7] //4 is missing
// let total = ((arr.length+1)*(arr.length+2))/2;
// // console.log(total);
// for(let i = 0;i<arr.length; i++){
//     total = total - arr[i];
// }
// console.log("this is a missing number"+  total)
// let missingNum = total
// res.send("this is a missing number"+ missingNum)
// })

// -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing

router.get("/sol2",function(req,res){
    let arr = [33, 34, 35, 37, 38] //36 is missing
    let total = arr.length+1
    let result = total*(arr[0]+arr[arr.length-1])/2;
    let a = 0;
    for(let i =0; i<arr.length;i++){
        a +=arr[i]
    }
    let missingNum = result - a
    res.send("missing number is"+ missingNum)
})


module.exports = router;