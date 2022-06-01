let a = 2;
let b = '5';
const Jacob = { fname: 'Jacob', lname: 'Siegel', age: 32 };

let text = `<p>Hello!!! The sum of a + b is: ${a + parseInt(b)}.</p> 
<p>${Jacob.fname} is ${Jacob.age} years old</p>`;

document.write(text);

let obj1 = {
	fname: 'Ralph',
	lname: 'Louie',
	age: 32
};

document.write(JSON.stringify('Hello ' + obj1.fname));

//CSS color picker
let color = document.querySelector('#color');
color.addEventListener(
	'change',
	(e) => {
		e.preventDefault();
		switch (color.value.toLowerCase()) {
			case 'red':
				Color.style.backgroundColor = 'red';
				Color.style.color = 'white';
				break;
			case 'blue':
				Color.style.backgroundColor = 'blue';
				Color.style.color = 'white';
				break;
			case 'green':
				Color.style.backgroundColor = 'green';
				Color.style.color = 'white';
				break;
			case 'yellow':
				Color.style.backgroundColor = 'yellow';
				Color.style.color = 'black';
				break;

			case 'black':
				Color.style.backgroundColor = '#000000 !important';
				Color.style.color = '#ffffff !important';

			case 'white':
				Color.style.backgroundColor = '#ffffff';
				Color.style.color = '#000000';
		}
	},
	false
);

let Color = document.querySelector('body');
let submit = document.querySelector('#submit');
/*color.addEventListener(
	'change',
	(e) => {
		e.preventDefault();
		switch (color.value.toLowerCase()) {
			case 'red':
				Color.style.backgroundColor = 'red';
				Color.style.color = 'white';
				break;
			case 'blue':
				Color.style.backgroundColor = 'blue';
				Color.style.color = 'white';
				break;
			case 'green':
				Color.style.backgroundColor = 'green';
				Color.style.color = 'white';
				break;
			case 'yellow':
				Color.style.backgroundColor = 'yellow';
				Color.style.color = 'black';
				break;

			case 'black':
				Color.style.backgroundColor = 'black';
				Color.style.color = 'white';

			case 'white':
				Color.style.backgroundColor = 'white';
				Color.style.color = 'black';
		}
	},
	false
);
*/
