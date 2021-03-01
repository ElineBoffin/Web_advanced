let code = prompt("Geef een getal tussen 1 en 5");

if (code > 5)
{
    alert("Uw getal is groter dan 5");
    code = prompt("Geef een getal tussen 1 en 5");
}
else if (code < 1)
{
    alert("Uw getal is kleiner dan 1");
    code = prompt("Geef een getal tussen 1 en 5");
}

let tekst = "Het getal dat u invoerde was: " + code;
document.getElementById("ingave").innerHTML = tekst;

console.log(document.getElementById("ingave"));