const bookModel =require("../models/bookModel")

const createBook = async function(req, res){
        let data = req.body
        let savedBook = await bookModel.create(data)
        res.send({msg: savedBook})
}

const getBooksData = async function(req,res){
    let allBooks = await bookModel.find()
    res.send({msg: allBooks})
}

module.exports.createBook= createBook
module.exports.getBooksData = getBooksData