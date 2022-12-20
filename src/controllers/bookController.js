const { count } = require("console")
const BookModel= require("../models/bookModel")
const { STATES} = require("mongoose")

const createBook= async function (req, res) {
  let data= req.body

  let savedData= await BookModel.create(data)
  res.send({msg: savedData})
}
module.exports.createBook=createBook
//--------------------------------------------------------------------------------------------------------------------------------------------
//List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another- first query will 
//find the author_id for "Chetan Bhagat”. Then next query will get the list of books with that author_id )

const getChetanBhagatBooks = async function (req, res) {
    let author = await AuthorModel.find({ authorName: "Chetan Bhagat" }).Select({author_id: 1,_id:0})
   console.log(author);
   let list =  await bookModel.find(author)
    res.send({ msg: chetanBooks });
  };
  module.exports.getChetanBhagatBooks = getChetanBhagatBooks

  //------------------------------------------------------------------------------------------------------------------

  
  
//find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price in response.  
//( This will also need 2  queries- 1st will be a findOneAndUpdate. The second will be a find query aith author_id from previous query)
const updateBook = async function (req, res) {
    let chetanBooks = await BookModel.findOneAndUpdate(
      { name: "Two States" },
      { $set:{price: 100} },
      { new: true }
    );
    console.log(chetanBooks)
    let ID = chetanBooks.author_id;
    let newPrice = chetanBooks.price;
  
    let author = await AuthorModel.find({ author_id: ID });
    let authorName = author[0].author_name;
  
    res.send({ msg: { authorName, newPrice } });
  };
  module.exports.updateBook= updateBook
  //----------------------------------------------------------------------------------------------------------------
  const bookCost = async function (req, res) {
    let books = await BookModel.find({ price: { $gte: 50, $lte: 100 } });
    let authors = [];
    for (let i = 0; i < books.length; i++) {
      let arr = await AuthorModel.find({ author_id: books[i].author_id});
      authors.push(arr);
  
    }
    let result = {};
  
    for (let i = 0; i < books.length; i++) {
      result[books[i].name] = authors[i][0].author_name;
    }
  
    res.send({ msg: result });
  };
  module.exports.bookCost = bookCost;


  //------------------------------------------------------------------------------------------------------------------
  













//   const getBooksData= async function (req, res) {
//       let allBooks= await BookModel.find( {authorName : "HO" } )
//       console.log(allBooks)
//       if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//       else res.send({msg: "No books found" , condition: false})
//   }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.deleteBooks= deleteBooks
