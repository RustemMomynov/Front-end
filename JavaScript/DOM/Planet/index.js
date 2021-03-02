
function init() {
var planet = document.querySelector(".green")

console.log(planet)

planet.innerHTML = "new text ";   
planet.setAttribute("class", "green red__text");
planet.setAttribute("alt", "green_red__text");

console.log(planet.getAttribute("class"))

console.log(planet)
}

window.onload = init;


function ass() {
    var sas = "tada";
}

ass();

