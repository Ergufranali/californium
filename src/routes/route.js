const express = require('express');
const router = express.Router();
// first problem


router.get("/get-movies",function(req,res){
    const getMovies = ["Ek tha Tiger", "Sultan", "Ramaiya Vastaviya" , "Ae dil hai mushkil","Jannat"]
    res.send(getMovies)
})
module.exports = router;

// second problem

router.get("/movies/:indexNumber", function(req, res){
    const movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    console.log(req.params.indexNumber)
    let movieIndex = req.params.indexNumber
    //check index value. less than 0 or greater than array (length - 1) are not valid
    if(movieIndex<0 || movieIndex>=movies.length) {
        //if the index is invalid send an error message
        return res.send('The index value is not correct, Please check it')
    }

    //if the index was valid send the movie at that index in response
    let requiredMovie = movies[movieIndex]
    res.send(requiredMovie)
})

/// third problem Handle a scenario in problem 2 where if the index is greater than the valid maximum value a message is returned that tells the user to use a valid index in an error message.

// 4th problem Write another api called GET /films. Instead of an array of strings define an array of movie objects this time. Each movie object should have values - id, name. An example of movies array is 

router.get("/films", function(req, res){
        const films = [ {
            "id": 1,
            "name": "The Shining"
           }, {
            "id": 2,
            "name": "Incendies"
           }, {
            "id": 3,
            "name": "Rang de Basanti"
           }, {
            "id": 4,
            "name": "Finding Nemo"
           }]
           //send all the films
          res.send(films) 
    })
    
// 5th problem //-----------------------------------------------------

    router.get("/films/:filmId", function(req, res){
        const films = [ {
            "id": 1,
            "name": "The Shining"
           }, {
            "id": 2,
            "name": "Incendies"
           }, {
            "id": 3,
            "name": "Rang de Basanti"
           }, {
            "id": 4,
            "name": "Finding Nemo"
           }]
    
           let filmId = req.params.filmId
    
           //iterate all the films
           //search for a film whose id matches with the id recevied in request
           for(let i = 0; i < films.length; i++){
               let film = films[i]
               if(film.id === filmId) {
                   //if there is a match return the response from here
                   return res.send(film)
               }
           }
    
           //if there is no match give an error response
           res.send("No movie exists with this id")
    })