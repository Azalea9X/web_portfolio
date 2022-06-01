let height = document.querySelector('img.imgone');

let menu = document.querySelector('.fa-bars');

let expanded = menu.getAttribute('data-visible');

let nav = document.querySelector('.nav');

//Run through this JavaScript and check each to make sure that it works.

let main = document.querySelector('main');

function expandMenu() {
	if (expanded == 'false') {
		expanded = 'true';
		menu.style.display = 'none';
		nav.style.display = 'flex';
		nav.style.marginTop = '-103px';
		main.style.marginTop = '-25px';
	}
}

menu.addEventListener('click', expandMenu, false);

let active = document.querySelector('a.active');

let links = document.querySelectorAll('a');

function changeLink(e) {
	let target = e.target;
	e.preventDefault();
	if (active) {
		active.classList.remove('active');
		for (i = 0; i < links.length; i++) {
			links[i].classList.remove('active');
		}
		target.classList.add('active');
	}
}

for (i = 0; i < links.length; i++) {
	links[i].addEventListener('click', changeLink, false);
}

let home = document.querySelector('#Home');

let who = document.querySelector('#Who');

let about = document.querySelector('#About');

let prices = document.querySelector('#Prices');

function changeContent(e) {
	if (e.target.getAttribute('id') == 'Home1') {
		main.textContent = '';
		main.innerHTML += home.innerHTML;
		nav.style.marginTop = '-103px';
		main.style.marginTop = '-25px';
	} else if (e.target.getAttribute('id') == 'Who1') {
		main.textContent = '';

		main.innerHTML += who.innerHTML;

		nav.style.marginTop = '-103px';
		main.style.marginTop = '-25px';
	} else if (e.target.getAttribute('id') == 'About_us') {
		main.textContent = '';
		nav.style.position = 'relative';
		nav.style.top = '-25px';
		main.innerHTML += about.innerHTML;
	} else if (e.target.getAttribute('id') == 'Pricing1') {
		main.textContent = '';
		nav.style.position = 'relative';
		nav.style.top = '-25px';
		main.innerHTML += prices.innerHTML;
	}
}

for (i = 0; i < links.length; i++) {
	links[i].addEventListener('click', changeContent, false);
}
let form = document.querySelector('#form');
let button1 = document.querySelector('#submit');

function alert1(e) {
	alert('Hi');
}

button1.addEventListener('click', alert1, false);
//For the pricing page.
