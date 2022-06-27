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



const newArticleSchema=new mongoose.Schema({title:{type:String,required:[!0,"Please check your data entry, no name specified"]},
content:{type:String,required:[!0,"Please fill this information out! I would really appreciate it."]}}); 

const article=mongoose.model("Articles",newArticleSchema);

const parser=require("body-parser"); 
const { prependOnceListener } = require("process");

const parsing=parser.urlencoded({extended:!0});

app.use(express.static(__dirname+"/public/"));
 

app.route('/articles')
//The get method
.get((req, res) => {
	//getDate();
	

	res.set("Content-Type", "text/html");


	//Found this on stackoverflow, https://stackoverflow.com/questions/60919157/res-write-not-working-properly-its-showing-output-including-html-tags
	article.insertMany(posts, (err) => {
		if (err){
			console.log(err);
		}
	});

	article.find({}, (err, articles) => {
if (!err) {
	res.write(`<h2>${article.title}</h2><p>${article.content}</p>`); 
	//Adding the CSS if there is no errors, otherwise, the page would be pretty ugly. 
	res.write(`<head><style>@import url(https://azalea9x.github.io/portfolio/Bootstrap/dist/css/bootstrap.min.css);body{background-image:url(https://images.unsplash.com/photo-1601662528567-526cd06f6582?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80)!important;background-size:cover!important;font-size:1.5rem;line-height:2}nav ul{display:flex;justify-content:space-between}nav ul li{list-style-type:none}section.footer{background-image:url(https://unsplash.com/photos/Y8K6UFMnKt8);background-size:cover}nav ul li a{text-decoration:none}.active{color:red;text-decoration:underline}.active:focus{color:purple}</style></head>`);


	//Doing a for each loop looping through the articles schema. 
	articles.forEach((article)=>{
res.write(`<h2>${article.title}</h2><p>${article.content}<br><br>`);});
//Writing out an HTML form. 
res.write(`<div class="form-group">
            <form action="/articles" method="post">
                <h2>Add entry to the database</h2>
                <label for="title">Entry title
                    <input type="text" class="form-control" name="title">
                </label><br>
                <label for="post">
                    Content
                    <textarea name="content" class="form-control" cols="30" rows="5"></textarea>
                </label>
        </div>
        <Input class="btn btn-primary" type="submit">
        </form>`);
		//End of the form.
}})})//End of the get
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

app.listen(5000, () => {
	console.log("Express listening on port 5000");
});