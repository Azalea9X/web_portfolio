//jshint esversion:6
const express = require('express');
const bparser = require('body-parser');
//Add the body parser NPM package.
const app = express();
app.use(bparser.urlencoded({ extended: true }));
//So far so good.

//Use express with body parser.
//This is code that we need every single time.

//Currently, our server isn't responding with anything. Let's give it a response.
app.get('/', (request, response) => {
	console.log(request);
	//This should provide a path for the file. You'll now see that you get all the things with the index.HTML. It'l update immediately.
	response.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
	var num1 = Number(req.body.num1);
	var num2 = Number(req.body.num2);
	var result = num1 + num2;
	var operator = req.body.operator;
	switch (operator) {
		case 'multiply':
			var result = num1 * num2;
			break;
		case 'divide':
			var result = num1 / num2;
			break;
		case 'add':
			var result = num1 + num2;
			break;
		case 'subtract':
			var result = num1 - num2;
			break;
	}
	res.send('The number is: ' + result);
});

//Adding a post request that will take the info from the bmiCalculator page.

//Listen to the server. This server is running on port 3,000. You can choose any other port that you want, and, you can go there with localhost.
app.listen(3000, () => {
	console.log('Server started on port 3000!');
});
