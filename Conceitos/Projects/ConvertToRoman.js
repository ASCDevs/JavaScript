/*
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
    let n = num;
    let resultado="";
    let romanos = {
        1:"I", 4:"IV", 5:"V",
        9:"IX", 10:"X", 40:"XL",
        50:"L", 90:"XC", 100:"C",
        400:"CD", 500:"D", 900:"CM",
        1000:"M"
    };
    let numeros = Object.keys(romanos);
    let size = numeros.length;
   
    while(n!=0){
    for(let i=size-1;i>=0;i--){
            if(n>=numeros[i]){
                resultado+=romanos[numeros[i]];
                n-=parseInt(numeros[i]);
                break;
            }
        }
    }   
    return num+" = "+resultado;
}
   
console.log(convertToRoman(83));
console.log(convertToRoman(36));
console.log(convertToRoman(798));
console.log(convertToRoman(29));
console.log(convertToRoman(44));
console.log(convertToRoman(45));
console.log(convertToRoman(891));
console.log(convertToRoman(1000));
   
   