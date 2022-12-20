const{ count}= require('console');
const { models } = require('mongoose');
const authorModel = require("../models/authorModel")

const createAuthor = async function (req,res){
    let author = req.body;
    let savedAuthor = await authorModel.create(author);
    res.send({msg: savedAuthor});
}

const getAuthor = async function(req,res){
    let allAuthor = await authorModel.find()
    res.send({msg: allAuthor})
}

module.exports.createAuthor= createAuthor;
module.exports.getAuthor= getAuthor;