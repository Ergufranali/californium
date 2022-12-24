const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
mongoose.set('strictQuery', false)
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://gufranali:bN5zhOzxTliWQD6Q@ghufranali.z44vgya.mongodb.net/E-Commerce-DB01", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);
// unreachable becuase the cycle has terminated
app.use(
    function (req, res, next) {
        console.log ("inside GLOBAL MW");
        next();
  }
);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
