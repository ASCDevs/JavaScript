/* 
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/

function faltaLetra(str){

    for(let i=0;i<str.length;i++){
        let codigo = str.charCodeAt(i);
        if(codigo!==str.charCodeAt(0)+i){
            return String.fromCharCode(codigo-1);
        }
    }

    return undefined;
}

console.log(faltaLetra("abce"));
console.log(faltaLetra("abcdefghjklmno"));
console.log(faltaLetra("stvwx"));
console.log(faltaLetra("bcdf"));
console.log(faltaLetra("abcdefghijklmnopqrstuvwxyz"));


