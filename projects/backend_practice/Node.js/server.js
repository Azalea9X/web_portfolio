//jshint esversion:6.
const express = require('express');
const app = express();

//Using the get method! Using the /, we get the current directory.

//Currently, our server isn't responding with anything. Let's give it a response.
/*
app.get('/', (request, response) => {
	console.log(request);
	response.send('<h1>Hello world!</h1>');
});

app.get('/About', (request, response) => {
	console.log(request);
	response.send('<h1>This is some information about myself.</h1>');
});

app.get('/test', (request, response) => {
	console.log(request);
	response.send('<h1>This is a test. I really like it.</h1>');
});

app.get('/Conact_us', (request, response) => {
	console.log(request);
	response.send('<h1>My email is JSiegel003@gmail.com!</h1>');
});

app.get('/404', (request, response) => {
	console.log(request);
	response.send(`<h1>Hi, you should not have come across this website. Sorry, this isn't really helpful !</h1>`);
});

app.listen(3000, () => {
	console.log('Server started on port 3000!'); //Note, the other thing was a joke.
})*/
