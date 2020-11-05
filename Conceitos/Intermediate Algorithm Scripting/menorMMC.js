/*
Encontre o menor múltiplo comum dos parâmetros fornecidos que podem ser 
divididos uniformemente por ambos, bem como por todos os números sequenciais 
na faixa entre esses parâmetros.
*/
function smallestCommons(arr) {
  
    //troca os valores caso o primeiro
    //seja maior que o segundo numero
    if(arr[0]>arr[1]){
      [arr[0],arr[1]]=[arr[1],arr[0]];
    }
  
    let mdc = (a,b)=>{
      if(b==0){
        return a;
      }else{
        return mdc(b,a%b);
      }
    }
  
    let mmc = (a,b)=>{
      return (a*b)/mdc(a,b);
    }
    let [min,max] = [arr[0],arr[1]];
    let atualMMC = min;
  
    while (min<max){
      atualMMC = mmc(atualMMC,++min);
    }
  
    return atualMMC;
  
}
  

console.log(smallestCommons([1,5])); //60
console.log(smallestCommons([5,1])); //60
console.log(smallestCommons([23,18])) //6056820
console.log(smallestCommons([2,10])); //2520
console.log(smallestCommons([1,13])); //360360
  
  