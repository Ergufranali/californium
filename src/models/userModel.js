const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile: {
        type: String,

        required: true
    },
    emailId: String,
    password: String,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    isDeleted:{
        type: Boolean,
        default: false
    },
    age: Number,
    posts: {type: [], deafult: []}
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema)


// "firstName" : "Sabiha",
// "lastName" : "Khan",
// "mobile" : "9898909087",
// "emailId" : "sk@gmail.com",
// "password" : "password123",
// "gender" : "female",
// "isDeleted": false, //default value is false 
// "age" : 12,
// "createdAt" : ISODate("2022-03-08T05:04:18.737Z"),
// "updatedAt" : ISODate("2022-03-08T05:04:18.737Z"),
// "__v" : 0
// }