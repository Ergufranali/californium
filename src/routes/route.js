const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.post("/createUser", UserController.createUser  )
router.get("/getUsersData", UserController.getUsersData)


router.post("/createBook",BookController.createBook)
router.get("/getBooks",BookController.getBooksData)


module.exports = router;  