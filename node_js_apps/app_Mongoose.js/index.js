//Requiring the .dotEnv package with nodeJS
require('dotenv').config({ override: true })



//jshint esversion:6
const mongoose = require('mongoose'); 
//https://stackoverflow.com/questions/30105823/mongoerror-auth-failed-mongoose-connection-string

require('dotenv').config()
let express=require("express");
const path=require("path");
const https=require("https");
let app=express();

const request=require("request");
const mailchimp=require("@mailchimp/mailchimp_marketing");
app.set("view engine","ejs");
let fs=require("fs");
const ejsLint=require("ejs-lint");
const _ =require("lodash");
const bparser=require("body-parser");
app.use(bparser.urlencoded({extended:!0}));  



app.use(express.static(__dirname+"/public/"));


mongoose.connect('mongodb://localhost:27017/to_do', {
    auth: {
        username: `${process.env.USERNAME}`,
        password: `${process.env.PASSWORD}`,
    },
    authSource:"admin",
    useUnifiedTopology: true,
    useNewUrlParser: true
})


const food = mongoose.model('food', favorite_food);


const item1 = new food({
    name: "Banana",
    rating: 6, 
    review: "The best fruit that I have ever tasted!!"
});

const item2 = new food({
    name: "Pork",
    rating: 8, 
    review: "The best fruit that I have ever tasted!!"
});

const item3 = new food({
    name: "Bacon",
    rating: 5, 
    review: "The best fruit that I have ever tasted!!"
});

food.insertMany([item1, item2, item3]).then(console.log("Items inserted in to the data base")).catch((err)=> {
	if (err) {
		console.log(err);
	}
	else{
		console.log("Action was a success!!!");
	}
})





 

app.route('/')
//The get method
.get((req, res) => {
	//getDate();
	

	res.set("Content-Type", "text/html");


	//Found this on stackoverflow, https://stackoverflow.com/questions/60919157/res-write-not-working-properly-its-showing-output-including-html-tags
   to_do.insertMany(posts, (err) => {
		if (err){
			console.log(err);
		}
	});})

 .post(async (req, res) => {





	app.route('/to_do/:title')
	
.get((req, res) => {
	res.set("Content-Type", "text/html");
	let title1 = req.params.title; 
	list.findOne({title: req.params.title}, (err, item1) => {
		if (!err) {
			res.write(`<h2>${item1.title}</h2>
			<pre>${item1.content}</pre>`);
		}
		else {
			res.send(err);
		}
	})
})

app.listen(5000, (err)=> {
    if (!err) {
        console.log("Listening on port 5000");
    }
})
