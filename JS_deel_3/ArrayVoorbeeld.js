//Array aanmaken kan op 2 manieren
let mijnArray = new Array(5);
let mijnArray2 = [];

//Array vullen
mijnArray[0] = 'eerste positie';

console.log(mijnArray[0]);

//Array overschrijven
mijnArray[0] = 'Nu iets anders';

//lengte oproepen van een array
mijnArray[0] = 'eerste positie';
mijnArray[1] = 'tweede positie';
mijnArray[2] = 'derde positie';
mijnArray[3] = 'vierde positie';
mijnArray[4] = 'vijfde positie';

//over een array loopen
for (let i = 0; i < mijnArray.length; i++) {
    console.log(mijnArray[i]);
}