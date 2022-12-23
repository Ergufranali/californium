const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
mongoose.set('strictQuery', false);
const app = express();
const moment = require('moment')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use (
    function (req, res, next) {
        console.log ("inside GLOBAL MW");
        // const date=new Date();
        const date = moment().format("DD-MM-YYYY,hh:mm:ss")
        const ip = req.ip
        const hitRoute= req.originalUrl
        console.log(date,ip,hitRoute) 
        next();
  }
  );
app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
