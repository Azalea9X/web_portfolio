let switchEl = document.querySelector(".switch"); 
let body = document.querySelector("body");
function toggle() {
   if (body.style.backgroundColor != "black") {
body.style.backgroundColor = "black"; body.style.color = "white"; 
}

else {
   body.style.backgroundColor = "white"; body.style.color = "black"; 
}
}

document.querySelector(".switch").addEventListener("click", () => {
toggle(); 

}, false);