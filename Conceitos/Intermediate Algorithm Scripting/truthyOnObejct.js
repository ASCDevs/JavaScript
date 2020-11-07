/*
Check if the predicate (second argument) is truthy on 
all elements of a collection (first argument).

In other words, you are given an array collection of objects. 
The predicate pre will be an object property and you need to return 
true if its value is truthy. Otherwise, return false.
*/

function truthCheck(collection, pre) {
    let size = collection.length;
    
    for(let i=0;i<size;i++){
      //se o valor na propriedade n for truthy(legitimo de acordo com o tipo) então é falsy(invalido)
      //https://masteringjs.io/tutorials/fundamentals/truthy#:~:text=In%20JavaScript%2C%20a%20value%20is,the%20context%20of%20if%20statements.
      if(!collection[i][pre]){
       return false; 
      }
    }
  
    return true;
  }
  
  console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")); //true
  console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"));//false
  console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age")); //false
  console.log(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat"));//true
  
  