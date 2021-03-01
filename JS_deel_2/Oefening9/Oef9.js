function delen() {

    num1 = document.getElementById("getal1").value;
    num2 = document.getElementById("getal2").value;

    document.getElementById("uitkomst").innerHTML = num1 / num2;
}
console.log(document.getElementById("uitkomst"))

function vermenigvuldigen() {

    num1 = document.getElementById("getal1").value;
    num2 = document.getElementById("getal2").value;

    document.getElementById("uitkomst").innerHTML = num1 * num2;
}
console.log(document.getElementById("uitkomst"));

function aftrekken() {

    num1 = document.getElementById("getal1").value;
    num2 = document.getElementById("getal2").value;

    document.getElementById("uitkomst").innerHTML = num1 - num2;
}
console.log(document.getElementById("uitkomst"));

function optellen() {

    num1 = Number (document.getElementById("getal1").value);
    num2 = Number (document.getElementById("getal2").value);

    document.getElementById("uitkomst").innerHTML = num1 + num2;
}
console.log(document.getElementById("uitkomst"));