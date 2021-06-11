/*
    JSON.stringify() permite criar uma string somente das
    propriedades passadas no parâmetro
*/

const band = {
    vocals: "Kledis",
    bass: "Flea",
    drums: "Smith",
    guitar: "Frusciante"
};

const selected = ["bass","guitar"];
const selectedBandMembers = JSON.stringify(band,selected);

console.log(band);
console.log(selectedBandMembers);
