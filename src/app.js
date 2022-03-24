const express = require("express");
const app = express();
const userRouter = require('../backend/api/routes/users.js')
const morgan = require("morgan");
const bodyParser = require("body-parser");
const Razorpay = require('razorpay')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const mongoose = require("mongoose");

const dbURL = "mongodb+srv://Kanak1081:kanak1234@cluster0.wa3dw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
//CREATING A SERVER USING EXPRESS
mongoose.connect(dbURL,{
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(
    ()=>console.log("MongoDB is successfully connected")
).catch(
    (err)=>console.log(err)
)


//configuring bodyparser (accepts body value from request and parses it into given format like json)
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//configuring morgan(logger)
app.use(morgan("dev"));

app.use('/tutor',userRouter)



module.exports = app