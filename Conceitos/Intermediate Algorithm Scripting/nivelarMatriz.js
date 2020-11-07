/*
Nivelar uma matriz aninhada em diversos níveis.
*/

//Utilizar conceito de recursividade
function nivelaMatriz(arr){
    let novaMatriz = [].concat(...arr);
    if(novaMatriz.some(Array.isArray)){
        return nivelaMatriz(novaMatriz);
    }else{
        return novaMatriz;
    }
}

console.log(nivelaMatriz([1, [2], [3, [[4]]]])); //[1, 2, 3, 4]
console.log(nivelaMatriz([[["a"]], [["b"]]])); // ["a", "b"]
console.log(nivelaMatriz([1, [], [3, [[4]]]])); //[1, 3, 4]
console.log(nivelaMatriz([1, {}, [3, [[4]]]])); //[1, {}, 3, 4]