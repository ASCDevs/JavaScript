/* 
    JSON.parse() converte os dados para um objeto JavaScript,
    da forma feita abaixo se torna segura pois irá atribuir null 
    quando o json for inválido e não irá lançar um exception (Podendo
    quebrar a aplicação)
*/
const parseJson = data => {
    try{
        return JSON.parse(data);
    }catch(e){
        return null;
    }
};

const band = {
    vocals: "Kledis",
    bass: "Flea",
    drums: "Smith",
    guitar: "Frusciante"
};

const selected = ["bass","guitar"];
const selectedBandMembers = JSON.stringify(band,selected);

console.log("Tipo de band: "+typeof band);
console.log("Tipo de selectedBandMembers: "+typeof selectedBandMembers);

console.log(parseJson(band));
console.log(parseJson(selectedBandMembers));

const novoSelectedBandMembers =  parseJson(selectedBandMembers);
console.log("Tipo de novoSelectedBandMembers: "+typeof novoSelectedBandMembers);
