let auto = {
    merk: 'Ford',
    model: 'mustang',
    samengevoegd: function() {
        return this.merk + this.model;
    }
};
console.log(auto.merk);
console.log(auto["merk"]);
console.log(auto.samengevoegd());
console.log(auto.samengevoegd); //je krijgt de functie zelf terug.