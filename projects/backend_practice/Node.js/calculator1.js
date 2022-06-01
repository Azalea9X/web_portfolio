//jshint esversion:6.
/*const express = require('express');
const app = express();
const bparser = require('body-parser');
const https = require('https');

app.use(bparser.urlencoded({ extended: true }));
/*app.get('/', (request, response) => {
	console.log(request);

	//response.sendFile(__dirname + '/bmiCalculator.html');
});*/

/*app.get('/weather', (req, res) => {
	res.sendFile(__dirname + '/weatherAPIcall.html');

	/*const query = 'London';

	*/

/*	app.post('/', (req, res) => {
		const query = req.body.query;
		console.log(query);
		const APIkey = '080845b04c1f4e75ed332da286f3a852';
		const units = 'metric';
		const url = `https://api.openweathermap.org/data/2.5/weather?appid=${APIkey}&q=${query}&unit=${units}`;

		//Trying to do an HTTPS get!!!
		https.get(url, (response) => {
			console.log(response.statusCode);

			response.on('data', (data) => {
				//Beginning of the call to get the data from the API call.
				const weatherData = JSON.parse(data);
				const temp = weatherData.main.temp;
				const desc = weatherData.weather[0].description;
				res.write('<p>Hello there!' + desc);

				//const icon = weatherData[0].res;
			});

			//End of the HTTPS get.
		});
	});
});

app.get('/About', (request, response) => {
	console.log(request);
	response.send('<h1>This is some information about myself.</h1>');
});

app.get('/test', (request, response) => {
	console.log(request);
});

app.get('/Contact_us', (request, response) => {
	console.log(request);
	response.send('<h1>My email is JSiegel003@gmail.com!</h1>');
});

app.get('/404', (request, response) => {
	console.log(request);
	response.send(`<h1>Hi, you should not have come across this website. Sorry, this isn't really helpful !</h1>`);
});
//i REALLY need to divide this into different apps. That's for the calculator app. I am working on the current app.

/*app.post('/', (req, res) => {
	var num1 = Number(req.body.weight);
	var num2 = Number(req.body.height);
	var bmi = num1 / (num2 * num2) * 703;
	res.send(`Your BMI is: ${bmi}`);
});*/

/*app.listen(3000, () => {
	console.log('Hi!!!');
});*/
