let express = require('express');
const path = require('path');
const https = require('https');
const date = require(__dirname + '/date.js'); 
let day = date.getDay(); 
console.log(day);
let app = express();
let food = [];
let workFood = [];
const request = require('request');
const mailchimp = require('@mailchimp/mailchimp_marketing');
app.set('view engine', 'ejs');
let fs = require('fs'); 

//Test two
const parser = require('body-parser');
const parsing = parser.urlencoded({ extended: true });

app.get('/', (req, res) => {

	res.render('lists', { listTitle: day, newLI: food});
	getDay();

});

app.post('/', parsing, (req, res) => {
	const bparser = require('body-parser');
	app.use(bparser.urlencoded({ extended: true }));
	newfood = req.body.food;
	console.log(req.body);
	if (req.body.list === "Work list "){
		workFood.push(req.body.food); 
		res.redirect("/work"); 
	} 
	else {
			food.push(newfood);
			res.redirect("/");
	}

	let drink = req.body.drink;
	res.redirect('/');
});


app.get("/work", parsing,  (req, res) => {
	res.render("lists", {listTitle: "Work list ", newLI: workFood}); 
	
})

app.post("/work", (req, res) => {

res.render("lists", {listTitle: "Work list ", newLI: workFood}); 
let nfood = req.body.food; 
workFood.push(nfood); 

res.redirect('/');


})
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
