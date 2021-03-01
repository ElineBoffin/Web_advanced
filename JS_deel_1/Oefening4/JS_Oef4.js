let name = prompt("Geef uw naam in");

let tekst = "Welkom " + name;
document.getElementById("naam").innerHTML = tekst;

console.log(document.getElementById("naam"));