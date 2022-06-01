alert(this.innerWidth);
let icon = document.querySelector('.fa-bars');

let expanded = icon.getAttribute('data-visible');

let nav = document.querySelector('nav ul');

function expandMenu() {
	if (expanded == 'false') {
		icon.style.display = 'none';
		nav.style.display = 'flex';
		nav.style.flexDirection = 'column';
	}
}

icon.addEventListener('click', expandMenu, false);

//For the form

let form = document.querySelector('#form');

//Sudden noises
let yes1 = document.querySelector('#check1');

//Struggling with tasks
let yes2 = document.querySelector('#check3');

//Keeping job

let yes3 = document.querySelector('#check5');
//For the no inputs

//Sudden noises
let no1 = document.querySelector('#check2');
let no2 = document.querySelector('#check4');

//Struggling with tasks
let no3 = document.querySelector('#check6');

//range
let range = document.querySelector('#range');

let msg = document.querySelector('#msg');

let link1 = '<a href="mailto:example@example.com">our email address here. </a>';
function Responses(e) {
	e.preventDefault();
	if (yes1.checked || yes2.checked || yes3.checked) {
		msg.innerHTML +=
			'<p>You really should seek help first before you talk to us. Otherwise, you should talk to us at: ' + link1;
	}

	if (yes1.checked) {
		msg.innerHTML +=
			'<p>On staying awake: Having a good night sleep is important. We encourage first that you talk to a medical professional before seeking our help for this.</p>';
	}

	if (yes2.checked) {
		msg.innerHTML +=
			"<p>On struggling with tasks: Being able to focus is critical to your functioning. First talk to a doctor, as, we've advised previously, and then, once you get a diagnosis, then, you can come to us to start getting on the right path.</p>";
	}

	if (no3.checked) {
		msg.innerHTML +=
			'<p>On being able to keep a job: if you want to talk to us and have a consultation, you can. We have an expert that can assess the seriousness.  In this situation, we will first only help people who are military, as, we are a military family. But, ideally, if you have proof of a diagnosis, you can get help right away. If you are not military, but, need help, we can help you as well. You can email us at: ' +
			link1 +
			'</p>';
	}

	if (range.value > 1 || range.value == 1) {
		msg.innerHTML +=
			"<p>Our apologies. We cannot simply just assess your issues based off a test. We need to talk to you. Since you felt the need to answer this question honestly, we will save the test results in our system. We've given you tips on everything else. We hope that we will talk to you soon. Our email address is " +
			link1 +
			'</p>';
	}
}
form.addEventListener('submit', Responses, false);

let txtvalue = document.querySelector('#range1');
function range1(e) {
	txtvalue.innerHTML = e.target.value;
}
range.addEventListener('change', range1, false);
