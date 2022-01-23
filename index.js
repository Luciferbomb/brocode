const express = require('express')
const fs =require('fs');
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const bodyparser = require("body-parser");
const PORT = process.env.PORT || 3000
const URL = 'mongodb+srv://Ashu-Test:Mygpais7.6@testproject.e4ujm.mongodb.net/test';
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Bro and sis we are connected');

});
const kittySchema = new mongoose.Schema({
    yname: String,
    bname: String
});


const Contact = mongoose.model('LatestData', kittySchema);

var jsonParser = bodyparser.json();
var urlencodedParser = bodyparser.urlencoded({ extended: false })

app.get('/',(req,res)=>{
    
    res.sendFile(path.join(__dirname,'./index.html'))
})
app.use(bodyparser.json({extended: true}));
app.post('/create', (req,res) => {
    console.log("body",req.body);
    var Mydata = new Contact(req.body);
    Mydata.save().then(()=>{
        res.status(200).send("Inserted");
        
    }).catch(()=>{
        res.status(200).send("Inserted");
    })
});
app.listen(PORT, () => {
    console.log("Started");
});
