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
let text=[],arr1=[],posts=[],post="";
const _ =require("lodash");
const bparser=require("body-parser");
app.use(bparser.urlencoded({extended:!0}));  
//jshint esversion:6
const mongoose = require('mongoose'); 
let articles = [];

//https://stackoverflow.com/questions/30105823/mongoerror-auth-failed-mongoose-connection-string
mongoose.connect('mongodb://localhost:27017/wikiAPI', {
    auth: {
        username: `${process.env.USERNAME}`,
        password: `${process.env.PASSWORD}`,
    },
    authSource:"admin",
    useUnifiedTopology: true,
    useNewUrlParser: true
})



const newArticleSchema=new mongoose.Schema({
title: {
    type: String, 
    required: [1, "Please fill this out it's required"]
}, 
content: {
    type: String
}});     

const article=mongoose.model("Articles",newArticleSchema);



app.use(express.static(__dirname+"/public/"));
 

app.route('/articles')
//The get method
.get((req, res, next) => {
	//getDate();
	

	res.set("Content-Type", "text/html");
	

	//Found this on stackoverflow, https://stackoverflow.com/questions/60919157/res-write-not-working-properly-its-showing-output-including-html-tags
	article.insertMany(posts, (err) => {
		if (err){
			console.log(err);
		}
	})

    article.find({}, function (err, docs) {

		for (const item of docs) {
			articles.push(item);
		}

	})
res.render('forms'); 

})

.post(async (req, res) => {

	const posta = new article({
		title: req.body.title, 
		content: req.body.content,
	});
console.log(posta);
	//If this works, credit goes to https://stackoverflow.com/questions/60620055/saving-data-is-failed-validation-failed-in-node-js

	posta.save().then(() => {console.log('Data added to the database')
	res.redirect(`/articles`)})
	.catch(err => console.log('Displaying the error that was resulted with the operation', err));
	posts.push(posta);
			})//End of the post route. 
			.delete((req, res)=> {
				article.deleteMany({"name": "CSS3"}
					, (err) => {
						if (!err) {
							console.log("Success!!");
						}
						else{
							console.log(err); 
						}})})

	//Request targeting a specific article// 
	app.route('/articles/:title')
	
.get((req, res) => {
	res.set("Content-Type", "text/html");
	let title1 = req.params.title; 
	article.findOne({title: req.params.title}, (err, titleA) => {
		if (!err) {
			res.write(`<h2>${titleA.title}</h2>
			<pre>${titleA.content}</pre>`);
		}
		else {
			res.send(err);
		}
	})
})

.put((req, res) => {
	article.updateOne({title: req.params.title}, 
	{title: req.body.title, content: req.body.content},
	 (err) => { 
		if (!err) { res.write("Success!!");}});
})

.patch((req, res) => {
	article.updateOne({title: req.params.title}, 
		{$set: req.body},
		 (err) => { 
			if (!err) { res.write("Success!!");}});

})

.delete((req, res) => {
	article.deleteOne({title: req.params.title}, 
		 (err) => { 
			if (!err) { res.write("Success!!");}});

})	

app.route('/news')
.get((req, res) => {
	res.render('news', {articles: articles});
	})


app.listen(5000, () => {
	console.log("Express listening on port 5000");
});