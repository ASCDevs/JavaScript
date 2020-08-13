// Currying and partial application

//Simples curried function
function curried(x){
    return function(y){
        return x + y;
    }
}

//Usando o ES6
const curriedES6 = x => y => x + y;

console.log(curried(1)(2)); // 3
console.log(curriedES6(10)(20)); //30

//Curried function em partes
const forY = curried(1);
console.log(forY(3)); //4

//Impartial function
function impartial(x,y,z){
    return x + y + z;
}

//Partial function
//.bind para um dada função, cria um função vinculada com o mesmo corpo da função que foi chamada
const partialFn = impartial.bind(this, 1,2);
console.log(partialFn(10)); //retorna 13

function add(x) {
    return function(y){
      return function(z){
        return z+y+x;
      }
    }
  }
  console.log(add(10)(20)(30));
  
function add2(x){
    return y => z => z+y+x;
}
console.log(add(10)(10)(10));

const addES6 = x => y => z => x+y+z;
console.log(addES6(30)(30)(30));

let ex = [10,4,3,2,6,1]
