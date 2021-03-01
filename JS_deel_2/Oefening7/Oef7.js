let code = prompt("1: Geef een getal")
let code2 = prompt("2: Geef nog een getal")
let uitkomst = code * code2;

let tekst = "De uitkomst van de vermenigvuldiging is: " + uitkomst;
document.getElementById("resultaat").innerHTML = tekst;

console.log(document.getElementById("resultaat"));

