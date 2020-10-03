//Converter uma string para uma frase com lowercase e juntas por '-'

function spinalCase(str){
    return str.split(/\W|[_]|(?=[A-Z])/).join("-").toLowerCase();
}

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));