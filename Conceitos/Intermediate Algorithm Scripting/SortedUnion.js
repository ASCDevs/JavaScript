/* Write a function that takes two or more arrays and returns a new 
array of unique values in the order of the original provided arrays. 
-  all arrays should be included in their original order, but with 
no duplicates in the final array.*/

function uniteUnique(...arr) {
    let concatArr =[];
    let finalArr = [];
  
    for(let i=0;i<arr.length;i++){
      concatArr = concatArr.concat(arr[i]);
    }
    finalArr = concatArr.filter((elemento,indice) =>{
      return concatArr.indexOf(elemento)==indice;
    });
    return "Resultado: "+finalArr;
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
  console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
  console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));