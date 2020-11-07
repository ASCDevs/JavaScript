/* 
Given the array , iterate through and remove each element starting from 
the first element (the 0 index) until the function returns when the iterated 
element is passed through it.
*/
function dropElements(arr, func) {
    let tamanho = arr.length;
  
    for(let i=0;i<tamanho;i++){
      if(func(arr[0])){
        return arr;
      }else{
        arr.shift();
      }
    }
    return arr;
}

  
console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
console.log(dropElements([1, 2, 3], function(n) {return n > 0;}));
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));
console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}));
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));