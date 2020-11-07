/*
Create a function that sums two arguments together. If only one 
argument is provided, then return a function that expects one argument 
and returns the sum.
*/

//https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-arguments-optional/14271

function addTogether(a,b) {
    if(typeof a !== "number"){
      return undefined;
    }
    function soma(b){
      return typeof b !== "number"?undefined:
      a+b;
    }
    return typeof b === "undefined" ? b => soma(b) : soma(b)
   }
   
   console.log(addTogether(2,3)); //5
   console.log(addTogether(23, 30)); //53
   console.log(addTogether(5)(7)); //12
   console.log(addTogether("http://bit.ly/IqT6zt")); //undefined
   console.log(addTogether(2, "3")); //undefined
   console.log(addTogether(2)([3])); //undefined
   