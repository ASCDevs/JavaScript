/* 
returns the sum of all prime numbers that are less than or equal to num.
*/ 

function sumPrimes(num) {

    function primo(x){
      for(let i=2;i<=x;i++){
        if(x%i==0&&i!=x){
          return false
        }
      }
      return x!==1 && x!==0;
    }
  
    let soma=0;
    for(let i=0;i<=num;i++){
      if(primo(i)){
        soma+=i;
      }
    }
    return soma;
  }
  
  console.log(sumPrimes(10)); //17
  console.log(sumPrimes(977)); //73156