const jwt = require("jsonwebtoken")

exports.authenticate = function(req, res, next) {
    let header = req.headers['x-auth-token']
   if(!header)return res.send({status :false  , message :"headers is required" })

   jwt.verify(header  , "californium batch" , (err ,decode )=>{
    if(err)return res.send({status : true , message : err.message })
    req.id  =decode.userId
    next()
   })
 
}



exports.authorise = function(req, res, next) {
      let userId = req.id 
      let id = req.params.userId
      console.log(userId , id)
      if(!id)return res.send({status : false , message: "params id required"})
      if(userId !== id)return res.send({status : false , message: "  unAuthorized"})
     next()
}