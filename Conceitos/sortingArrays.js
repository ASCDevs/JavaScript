/*
   - Aplicando métodos de ordenação simples em array
   - Utilizar de conceitos de callBack function
   - Aplicar functional programming
*/
console.log("Sorting Arrays \n")
/*Ordenando */
/*aplicando CallBack function*/

//Método sort altera as variaveis
//Por isso criamos um array temporário nas functions

const numberArray = [1,5,2,3,4];
const letterArray = ['g','b','f','e','a','d','c'];


function ordemCrescente(arr){
    let newArr = [];
    newArr = newArr.concat(arr);
    return newArr.sort(function(a,b){
        return a - b;
    });
};  
console.log(ordemCrescente(numberArray)); //a função irá retornar [1, 2, 3, 4, 5]

function reverseAlpha(arr){
    let newArr = [];
    newArr = newArr.concat(arr);
    return newArr.sort(function(a, b){
        return a === b ? 0 : a < b ? 1 : -1; 
    })
}
console.log(reverseAlpha(letterArray)); // [g,f,e,d,c,b,a]

function ordemAlfabetica(arr){
    let newArr = [];
    newArr = newArr.concat(arr);
    return newArr.sort(function(a,b){
        return a === b ? 0 : a < b ? -1 : 1;
    })
}
console.log(ordemAlfabetica(letterArray)); //  [a,b,c,d,e,f,g]


