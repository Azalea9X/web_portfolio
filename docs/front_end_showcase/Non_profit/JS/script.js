let icon = document.querySelector("i.fas.fa-bars"); 
let nav = document.querySelector("nav ul"); 
let lists = document.querySelector("nav ul li"); 
let links = document.querySelectorAll("nav ul li a"); 
function close() {
icon.style.display = "none"; 
nav.style.display ="flex"; 
lists.style.display = "visible";
nav.style.position ="relative !important"; 
nav.style.transform = "translateX(45px) scaleX(1.2)";

document.querySelectorAll('nav ul li a').forEach((link) => {
link.style.marginLeft = "5px";
})
document.querySelectorAll('nav ul li').forEach((list) => {
	let lists= []; 
	lists.push(list); 

if (list.style.marginLeft < 200){
	lists[1].style.marginLeft = "50px";

}
	})

}

icon.addEventListener("click", (e) => {
	close();
}, false);