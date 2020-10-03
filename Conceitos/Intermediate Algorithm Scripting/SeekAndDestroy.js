//A função recebe três argumentos, o primeiro sendo array
//A função deve remover todos os elementos do array,
//dado no segundo e terceiro argumento 

//devemos utilizar o arguments object

function destroyer(arr) {
  let args = [...arguments].splice(1);
  
  return arguments[0].concat(args).filter(item =>{
    return !args.includes(item)||!arguments[0].includes(item)
  })
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
console.log(destroyer([2, 3, 2, 3], 2, 3));


//Solução mais otimizada
console.log("\nSegunda solução\n");

function dest(arr){
    let args = [...arguments].slice(1);
    return arr.filter((val) => !args.includes(val));
}

console.log(dest([1, 2, 3, 1, 2, 3], 2, 3));
console.log(dest([1, 2, 3, 5, 1, 2, 3], 2, 3));
console.log(dest([3, 5, 1, 2, 2], 2, 3, 5));
console.log(dest([2, 3, 2, 3], 2, 3));