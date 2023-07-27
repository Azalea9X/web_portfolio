let icon = document.querySelector("i"); 
let nav = document.querySelector("nav ");
let nav_ul = document.querySelector("nav ul"); 
let lists = document.querySelector("nav ul li"); 
let links = document.querySelectorAll("nav ul li a"); 
function close() {
	document.querySelector("i").style.display = "none"; 

	document.querySelector("nav ").style.display="block";
	document.querySelector("nav ul").style.display="flex";
	document.querySelector("nav ul").style.justifyContent = "space-between"; 
	document.querySelector("nav ul li a").style.color ="white !important"; 

	document.querySelector("nav ul").style.position ="relative !important"; 
	document.querySelector("nav ul").style.transform = "translateX(45px) scaleX(1.2)";

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
	
	setTimeout(() => 
		{close();}, 100);
}, false);