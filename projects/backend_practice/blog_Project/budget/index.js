let express = require('express');
const path = require('path');
const https = require('https');
let app = express();
const request = require('request');
const mailchimp = require('@mailchimp/mailchimp_marketing');
app.set('view engine', 'ejs');
let fs = require('fs'); 
const ejsLint = require('ejs-lint');
let text = [];
let arr1 = []; 
let posts = []; 
let post = ''; 
const _ = require('lodash'); 
//Load the lodash
const bparser = require('body-parser');
app.use(bparser.urlencoded({ extended: true }));

const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/budget');

const newBudgetItem = new mongoose.Schema({
    title:{
        type: String, 
        required: [true, "Please check your data entry, no name specified"],
		//You can use 1 or true for the required option
    }, 
	company: {
		type: String, 
		required: [true, "Please fill this information out! I would really appreciate it."],
	},

	date: {
		type: String, 
		required: [true, "Please fill this information out! I would really appreciate it."],
	},
	price: {
		type: Number, 
		required: [true, "Please fill this information out! I would really appreciate it."],
	}, 
	category: {
		type: String, 
		required: [true, "Please fill this information out! I would really appreciate it."],
	}
});

const fItem = mongoose.model("Finances", newBudgetItem);
//Creating posts to add to the posts1. 





const parser = require('body-parser');
const parsing = parser.urlencoded({ extended: true });

/*app.use(express.static(__dirname + '/public'));*/
app.use(express.static(__dirname + '/public/'));


app.route('/budget')
//The get method
.get((req, res) => {
	//getDate();
	

	res.set("Content-Type", "text/html");


	//Found this on stackoverflow, https://stackoverflow.com/questions/60919157/res-write-not-working-properly-its-showing-output-including-html-tags
	

	fItem.find({}, (err, finances) => {
if (!err) {
	//Adding the CSS if there is no errors, otherwise, the page would be pretty ugly. 
	res.write(`<head><style>

	@import url('https://azalea9x.github.io/portfolio/Bootstrap/dist/css/bootstrap.min.css');
	
	
	body{
		background-image: url("https://images.unsplash.com/photo-1601662528567-526cd06f6582?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80") !important; 
		background-size: cover !important; 
		font-size: 1.5rem; 
		line-height: 2; 
	}
	
	nav ul {
		display: flex; 
		justify-content: space-between;
	}
	
	nav ul li {
		list-style-type: none; 
	}
	
	
	section.footer{
		background-image: url("https://unsplash.com/photos/Y8K6UFMnKt8"); 
		background-size: cover;
	}
	
	nav ul li a {
		text-decoration: none; 
	}
	
	.active {
		color: red; 
		text-decoration: underline; 
	}
	
	.active:focus{
		color: purple;
	}</style></head>`);
	//End of the res.write for the CSS. 

	//Doing a for each loop looping through the articles schema. 
 
//Writing out an HTML form. 
res.write(`<div class="form-group">
            <form action="/budget" method="post">
                <h2>Add entry to the database</h2>


                <label for="date">Entry date
                    <input type="text" class="form-control" name="date">
                </label><br>

				<label for="price">Price
                    <input type="text" class="form-control" name="price">
                </label><br>

				<label for="category">Category
				<input type="text" class="form-control" name="category">
				
			</label><br>

			<label for="company">Company
			<input type="text" class="form-control" name="company">
		</label><br>

		<label for="title">Transaction_title
			<input type="text" class="form-control" name="title">
		</label><br>

        </div>
        <Input class="btn btn-primary" type="submit">
        </form>`);
		//End of the form.
}})})//End of the get
.post(async (req, res) => {

	const posta = new fItem({
		date: req.body.date, 
		price: req.body.price,
		company: req.body.company, 
		title: req.body.title, 
		category: req.body.category
	});
console.log(posta);
	//If this works, credit goes to https://stackoverflow.com/questions/60620055/saving-data-is-failed-validation-failed-in-node-js

	posta.save().then(() => {console.log('Data added to the database');
	//At the 131.69 item.
	posts.push(posta); 
	res.redirect(`/budget`)

})
	.catch(err => console.log('Displaying the error that was resulted with the operation', err));
	posts.push(posta);

			})//End of the post route. 
			.delete((req, res)=> {
			})
//What the environment for the localhost for Heroku, I forget exactly where I found this. I do not want to plagurize... so...
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));