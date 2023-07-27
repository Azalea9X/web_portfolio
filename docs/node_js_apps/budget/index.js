//Requiring the .dotEnv package with nodeJS
require('dotenv').config({ override: true })

let express=require("express");
const path=require("path");
const https=require("https");
let eslint =require("eslint");
let app=express();
const request=require("request");
const mailchimp=require("@mailchimp/mailchimp_marketing");
app.set("view engine","ejs");
let fs=require("fs");
const ejsLint=require("ejs-lint");
let text=[],arr1=[],posts=[],post="";
const _=require("lodash"),bparser=require("body-parser");
app.use(bparser.urlencoded({extended:!0}));
  
//jshint esversion:6
const mongoose = require('mongoose'); 
//https://stackoverflow.com/questions/30105823/mongoerror-auth-failed-mongoose-connection-string

const db_url = "mongodb://127.0.0.1:27017";
mongoose.connect(db_url,{ useNewUrlParser: true }, function (err) { 
  if (err) throw err; console.log('Successfully connected'); });

//https://mongoosejs.com/docs/connections.html



const parser = require('body-parser');
 


const parsing = parser.urlencoded({ extended: true });

//Per overflow 



/*app.use(express.static(__dirname + '/public'));*/
app.use(express.static(__dirname + '/public/'));


app.get('/', (req, res) => {
  res.set("Content-Type", "text/html");
  res.write("<h2>Hello world!!!</h2>")

})
.get('/contact', (req, res) => {
  res.set("Content-Type", "text/html");
res.write("<h2>Hello!!!</h2>");  
res.write("<p>Hello how are you doing? My name is Jacob Siegel. I am looking forward to meeting you on this journey. I am hoping to become a web-developer. It's nice to meet you.</p>");

});


//I am going to be starting over from the beginning here. I think that I got it wrong and I also need to get the project up down. 



const PORT = 5000; 
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

//Works